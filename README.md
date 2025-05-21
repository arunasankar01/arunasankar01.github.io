# 🚀 Note to Self

**Branch:** `portfolio`  
**Deployment folder:** `docs/` (required by GitHub Pages)

---

## 🛠️ Local Development and Github Deployment

```bash
npm run dev

# After making changes:
# Build the project
npm run build

# Remove old docs folder (if any)
rm -rf docs

# Rename dist to docs
mv dist docs

# Stage changes (including docs)
git add -f docs
git add .

# Commit changes
git commit -m "message for commit"

# Push to portfolio branch
git push origin portfolio
