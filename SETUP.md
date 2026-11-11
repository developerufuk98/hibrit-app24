# Hibrit on iPhone — setup

You'll put four files on GitHub Pages (free hosting), open the link once in Safari,
and add it to your home screen. After that it behaves like a normal app: its own icon,
full screen, works offline at the gym, data stays on your phone.

Takes about 10 minutes, all from your Windows PC plus your iPhone. No Mac, no fees.

---

## What's in this folder

```
index.html              the whole app
sw.js                   lets it open without internet
manifest.webmanifest    app name, icon, full-screen setting
icons/                  home-screen icons
SETUP.md                this file (uploading it too is harmless)
```

---

## Step 1 — Put it online (GitHub Pages)

1. Go to **github.com** and sign up (free). Your username becomes part of the
   app's address, so pick one you'll keep.
2. Top right **+** → **New repository**.
   - Repository name: `hibrit`
   - Visibility: **Public** (free Pages hosting needs this — only the app's code is
     public, your workout data never leaves your phone)
   - Click **Create repository**.
3. On the empty repository page, click the link **uploading an existing file**.
4. Open the unzipped `hibrit-iphone` folder in Windows Explorer, select **everything inside it**
   (`index.html`, `sw.js`, `manifest.webmanifest`, the `icons` folder, `SETUP.md`)
   and drag it all onto the GitHub page. Use Chrome or Edge so the `icons` folder uploads too.
5. Scroll down → **Commit changes**.
6. Go to the repository's **Settings** tab → **Pages** (left menu).
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → **Save**
7. Wait 1–2 minutes and refresh that Pages screen. It will show your address:

   ```
   https://YOUR-USERNAME.github.io/hibrit/
   ```

   Open it on your PC to check the app appears.

## Step 2 — Install on the iPhone

1. Open the address **in Safari** (not Chrome — on iPhone only Safari can install it properly).
2. Tap **Share** (square with an up arrow). On newer iOS it may be inside the **⋯** menu first.
3. Scroll down → **Add to Home Screen** (*Ana Ekrana Ekle*) → make sure *Open as Web App*
   is on if you see that switch → **Add** (*Ekle*).
4. Close Safari. From now on, **only open Hibrit from its home-screen icon.**

> Why this matters: on iPhone, the Safari tab and the home-screen app keep separate data.
> Anything you log in the Safari tab won't show up in the app. The app shows a yellow
> reminder whenever it's opened in a Safari tab.

## Step 3 — Bring your old data back (if you have a backup)

In the app: **Analiz → Yedek → Geri yükle**, or on a fresh install the
**Eski telefondan yedeğim var** button on the home screen.

- **Backup as a file** (Drive, email attachment, iCloud): tap **Dosya seç** and pick it.
- **Backup as a WhatsApp/email message** (what the Android app's *Paylaş* sent): copy the
  whole message, paste it into the text box, tap **Metinden yükle**. Extra text around the
  backup (names, emojis) is ignored.

If you've already logged workouts on the iPhone, choose **Birleştir** (merge): your new
iPhone workouts stay, the old ones are added, and the same gym typed with different
capitalisation is recognised as one machine.

---

## Backups — so this never happens again

**Analiz → Yedek → Yedek al → Yedek dosyasını kaydet**, then in the menu that opens:
**Save to Files** (*Dosyalara Kaydet*) → **iCloud Drive** → Save.

The file is named `hibrit-yedek-YYYY-MM-DD.json`. If your phone is lost, it's waiting in
iCloud Drive on any new iPhone, iPad, Mac, or at icloud.com.

The home screen shows a reminder card once a week has passed since your last backup
and you've logged something new since. One tap on it takes you straight to saving.

---

## Good to know

- **Offline:** after the first launch the app opens without internet. Weak signal at
  the gym doesn't slow it down.
- **Don't delete the home-screen icon** without taking a backup first — removing it
  removes the app's data with it.
- **Keep the address the same.** Your data belongs to the exact web address. Renaming
  the GitHub repository or your username gives you an empty app at the new address
  (restore a backup there if that ever happens).
- **Weight entry** accepts both `27,5` and `27.5`. If the field contains something
  that isn't a number, saving is refused instead of logging a wrong weight.

## Updating the app later

1. On GitHub, open the repository → click `index.html` → pencil icon to edit, or
   **Add file → Upload files** to replace it with a new version.
2. Also open `sw.js` and change the version on the first code line, e.g.
   `hibrit-v2` → `hibrit-v3`. This tells the phone a new version exists.
3. Commit. On the iPhone, open the app, close it fully, open it again — the new
   version is in. Your data is untouched.

## If something goes wrong

| Problem | Fix |
|---|---|
| GitHub Pages shows 404 | Wait 2 more minutes. Check `index.html` is at the top level of the repository, not inside a folder. |
| Icon on home screen is a plain letter/screenshot | `icons` folder didn't upload. Upload it again (Add file → Upload files → drag the folder), then delete and re-add the home-screen icon *before* logging data. |
| App opens with Safari's address bar | It was opened from a Safari tab or bookmark, not the home-screen icon. |
| "Dosyalara Kaydet" doesn't appear | In the share menu, scroll down the list of actions — it's below the app icons. |
| Old backup says "Bu bir Hibrit yedeği değil" | The copied text was cut off. Copy the whole message again; it must start with `{` and end with `}`. |
