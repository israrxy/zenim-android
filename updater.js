// Zenim update manifest (updater.js)
// ----------------------------------
// This file lives in the zenim-android repo:
//   https://github.com/israrxy/zenim-android  (raw: /refs/heads/main/updater.js)
// The app fetches it on every startup and compares versions. If the number
// below is higher than the installed build, an "Update available" popup shows.
//
// HOW TO PUBLISH AN UPDATE:
//   1. Push a v* tag (e.g. v1.1.0) — GitHub Actions builds + publishes a
//      release on israrxy/Zenim with the APK attached automatically.
//   2. Edit the fields below, bump latestVersionCode (must be a bigger number
//      than before — builds carry it from app/build.gradle.kts), and update
//      the description with what's new.
//   3. Upload this file to the repo (overwrite the old one).
//
// Keep the object itself strict-JSON (quoted keys, one string per value, no
// trailing commas) — the app reads exactly that object, nothing else.
//
// FIELDS:
//   latestVersionCode  number  — must grow with every release; the app compares
//                                its own versionCode against this.
//   latestVersionName  string  — shown in the popup, e.g. "1.1".
//   mandatory          boolean — true = popup cannot be dismissed; only the
//                                Get-update button is offered (forced update).
//   minVersionCode     number  — safety floor: any installed build older than
//                                this is treated as mandatory even when
//                                "mandatory" is false (leave = latestVersionCode).
//   title              string  — optional; overrides the default popup title.
//   description        string  — what's new; plain text, shown in the popup.
//   downloadUrl        string  — where the Get-update button goes (browser).
//                                     Releases live on israrxy/ZENIM (not here).

const UPDATER = {
    "latestVersionCode": 1,
    "latestVersionName": "1.0",
    "mandatory": false,
    "minVersionCode": 1,
    "title": "",
    "description": "v1.0: new Zenim look (icon + splash), cleaner stream bar parking, per-torrent file picker, menus on search results and player, landscape skip buttons, developer card with photo, and an in-app update checker.",
    "downloadUrl": "https://github.com/israrxy/Zenim/releases/latest"
}
