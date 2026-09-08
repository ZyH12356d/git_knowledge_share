# Git Conflict Quick Reference Card

## What You'll Learn
This demo teaches you how to identify, understand, and resolve merge conflicts in git.

## Files in This Demo

| File | Purpose |
|------|---------|
| `README.md` | Overview and basic instructions |
| `STEP_BY_STEP_GUIDE.md` | **START HERE** - Detailed walkthrough with exact changes to make |
| `conflict-scenario-guide.md` | Reference guide for different conflict scenarios |
| `demo-code.js` | JavaScript file to practice code conflicts |
| `demo-config.json` | JSON configuration file for settings conflicts |
| `demo-document.md` | Markdown documentation for content conflicts |

## Quick Start (3 Minutes)

1. **Initialize git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Follow the STEP_BY_STEP_GUIDE.md** - It contains exact instructions for:
   - Creating branches
   - Making conflicting changes
   - Triggering merge conflicts
   - Resolving them properly

## Conflict Marker Anatomy

When git creates a conflict, you'll see:

```
<<<<<<< HEAD                    ← Current branch (main)
Your current branch content
=======                         ← Separator
Incoming branch content
>>>>>>> feature-branch          ← Branch being merged
```

## Resolution Process

1. **Identify** - Find files with conflicts (`git status`)
2. **Open** - Open each conflicting file
3. **Decide** - Choose which version to keep (or merge both)
4. **Remove** - Delete conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
5. **Test** - Make sure code still works
6. **Stage** - Add resolved files (`git add <file>`)
7. **Commit** - Complete the merge (`git commit`)

## Common Strategies

| Strategy | When to Use | Example |
|----------|-------------|---------|
| **Keep Ours** | Main branch version is correct | Bug fix on main |
| **Keep Theirs** | Feature branch version is better | New feature implementation |
| **Merge Both** | Both changes are needed | Different methods added to same class |
| **Rewrite** | Neither version is ideal | Refactor during resolution |

## Essential Commands

```bash
# See which files have conflicts
git status

# View differences
git diff

# Abort merge and start over
git merge --abort

# After resolving, stage files
git add <file>

# Complete the merge
git commit

# Visualize branch history
git log --oneline --graph --all
```

## Tips for Success

✓ **Read both versions** before deciding  
✓ **Keep code functional** after resolution  
✓ **Test immediately** after resolving  
✓ **Communicate with team** if unsure  
✓ **Commit often** to minimize large conflicts  

✗ Don't blindly accept one version  
✗ Don't leave conflict markers in code  
✗ Don't forget to test after resolving  
✗ Don't rush - take time to understand both changes  

## Practice Scenarios in This Demo

1. **Version Number Conflict** (demo-code.js)
   - Main: v1.1.0
   - Feature: v2.0.0
   - Learn: How to decide on version numbering

2. **Method Addition Conflict** (demo-code.js)
   - Main: adds `removeUser()`
   - Feature: adds `updateUser()`
   - Learn: How to keep both methods

3. **Configuration Conflict** (demo-config.json)
   - Multiple settings changed on both branches
   - Learn: How to merge JSON carefully

4. **Documentation Conflict** (demo-document.md)
   - Different sections added
   - License changed differently
   - Learn: How to merge prose content

## Next Steps After Demo

1. Try creating your own conflict scenarios
2. Practice with different file types
3. Use VS Code's built-in merge conflict resolver
4. Learn about `git rebase` for cleaner history

## Troubleshooting

**Problem:** Can't see conflict markers  
**Solution:** Check file encoding, use `git diff` to see conflicts

**Problem:** Merge commits look messy  
**Solution:** Consider using `git rebase` instead of merge

**Problem:** Accidentally committed with conflict markers  
**Solution:** `git reset HEAD~1`, fix properly, commit again

**Problem:** Want to undo everything  
**Solution:** `git merge --abort` (before committing) or `git reset --hard HEAD~1` (after committing - be careful!)

---

**Ready to start?** Open `STEP_BY_STEP_GUIDE.md` and follow along!
