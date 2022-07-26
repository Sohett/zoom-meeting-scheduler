# zoom-meeting-scheduler-backend

## Project setup
0. Enter into the `back` folder
1. Node version 16
2. Add a `.env` in the back folder (same level as the package.json) with those keys (can be found on the [Server-to-Server OAuth](https://marketplace.zoom.us/develop/apps/F2lMl2mXRAmIiAalDGjQ5A/credentials))
  - `ZOOM_AUTH_URI=https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${account ID}`
  - `ZOOM_CLIENT_ID=${Client ID}`
  - `ZOOM_CLIENT_SECRET=${Client secret}`
  - `ZOOM_CREATE_MEETING_URI=ZOOM_CREATE_MEETING_URI=https://api.zoom.us/v2/users/EMQbJWvdSNi8hyk6-Fqk9w/meetings`
3. Run `npm install`


### Local trigger of the code with
```
npm run dev:local
```

### Local keep alive server (on: `http://localhost:8080`)
```
npm run start
```
To be kept open when playing with the frontend Vue.js app in `dev`. Or with Postman

### Architectural choices and structure
On the [Notion page](https://thomassohet.notion.site/Technical-Challenge-674a66b9a25845938dcac1a4df4a3df3)

