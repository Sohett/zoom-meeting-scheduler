FUNCTION_NAME=$1

npm prune --production

zip lambda.zip -r *.js *.json src/ node_modules/ bin/

aws lambda update-function-code --function-name $FUNCTION_NAME --zip-file fileb://lambda.zip --profile thomas-sohet
sleep 1s
aws lambda wait function-updated --function-name $FUNCTION_NAME --profile thomas-sohet

aws lambda update-function-configuration --function-name $FUNCTION_NAME --environment Variables="{`cat .env | xargs | sed 's/ /,/g'`}" --profile thomas-sohet

rm -f lambda.zip

npm install
