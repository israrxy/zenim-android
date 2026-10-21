// Zenim update manifest (updater.js)
// ----------------------------------
// This file lives in the zenim-android repo:
//   https://github.com/israrxy/zenim-android  (raw: /refs/heads/main/updater.js)
// The app fetches it on every startup and compares versions. If the number
// below is higher than the installed build, an "Update available" popup shows.
//
// HOW TO PUBLISH AN UPDATE:
//   1. Build the new APK and upload it (e.g. a GitHub release on zenim-android).
//   2. Edit the fields below, bump latestVersionCode (must be a bigger number
//      than before), and update "description" with what's new.
//   3. Upload this file to the repo (overwrite the old one).
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

const UPDATER = {
    latestVersionCode: 1,
    latestVersionName: "1.0",
    mandatory: false,
    minVersionCode: 1,
    title: "",
    description:
        "Round 14: smoother stream bar parking, file picker with per-file " +
        "selection, search and player menus, skip buttons in landscape, and " +
        "the new Zenim look (icon + splash).",
    downloadUrl: "https://github.com/israrxy/zenim-android/releases/latest"
}
