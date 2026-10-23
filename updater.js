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
//      the description with what's new., and point assetUrl at
//      the new release's APK (the site download button follows it).
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
//                                     Releases live on israrxy/zenim-android.

const UPDATER = {
    "latestVersionCode": 2,
    "latestVersionName": "1.1",
    "mandatory": false,
    "minVersionCode": 1,
    "title": "",
    "description": "v1.1 fixes the first-run setup: the all-files permission screen no longer bounces back on itself (the flicker / stuck-touch you may have seen), and updates now install straight through Chrome with no extra permission step.",
    "downloadUrl": "https://github.com/israrxy/zenim-android/releases/latest",
    "assetUrl": "https://github.com/israrxy/zenim-android/releases/download/v1.1.0/zenim-v1.1.0.apk"
}
