curl -i -X POST \
 -H "Content-Type:application/x-www-form-urlencoded" \
 -d "grant_type=authorization_code" \
 -d "client_id=${YOUR_CLIENT_ID}" \
 -d "client_secret=${YOUR_CLIENT_SECRET}" \
 -d "code=${YOUR_CODE}" \
 -d "redirect_uri=https://accounts.secure.freee.co.jp/public_api/authorize?client_id=${YOUR_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fcallback&response_type=code" \
 'https://accounts.secure.freee.co.jp/public_api/token'

# {"access_token":"<アクセストークン>","token_type":"bearer","expires_in":86400,"refresh_token":"<リフレッシュトークン>","scope":"read write default_read","created_at":1597961220}

curl -H "Authorization: Bearer <アクセストークン>" https://api.freee.co.jp/api/1/companies

curl -i -X POST \
 -H "Content-Type:application/x-www-form-urlencoded" \
 -d "grant_type=refresh_token" \
 -d "client_id=${YOUR_CLIENT_ID}" \
 -d "client_secret=${YOUR_CLIENT_SECRET}" \
 -d "refresh_token=<リフレッシュトークン>" \
 -d "redirect_uri=https://accounts.secure.freee.co.jp/public_api/authorize?client_id=${YOUR_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fcallback&response_type=code" \
 'https://accounts.secure.freee.co.jp/public_api/token'

# ↓

# {"access_token":"","token_type":"bearer","expires_in":86400,"refresh_token":"","scope":"read write default_read","created_at":1597961937}

# ↓

# これで 初回accessToken取得でやると、invalid_grant になる。(OK)
