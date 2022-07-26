# zoom-meeting-scheduler-backend

## 🔌 Project setup
1. Enter into the `back` folder
2. Node version 16
3. Add a `.env` in the back folder (same level as the package.json) with those keys (can be found on the [Server-to-Server OAuth](https://marketplace.zoom.us/develop/apps/F2lMl2mXRAmIiAalDGjQ5A/credentials))
  - `ZOOM_AUTH_URI=https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${account ID}`
  - `ZOOM_CLIENT_ID=${Client ID}`
  - `ZOOM_CLIENT_SECRET=${Client secret}`
  - `ZOOM_CREATE_MEETING_URI=ZOOM_CREATE_MEETING_URI=https://api.zoom.us/v2/users/EMQbJWvdSNi8hyk6-Fqk9w/meetings`
4. Run `npm install`


### 🤓 Local trigger of the code with
```
npm run dev:local
```

### 💻 Local keep alive Server
Local server running on: `http://localhost:8080` with `npm run start`

Server is kept alive in order to be able to interact with it from the frontend Vue.js app in `dev`. Or with Postman 😉

### 📚 Architectural choices and structure
On the [Notion page](https://thomassohet.notion.site/Technical-Challenge-674a66b9a25845938dcac1a4df4a3df3)
