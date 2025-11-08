import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
plugins: [react()],
base: '/<REPO_NAME>/' // replace <REPO_NAME> before publishing or remove for custom domain
})
