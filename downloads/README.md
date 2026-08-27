# Coffee Lens APK Downloads

Place your production-ready APK files here:

```
downloads/
├── CoffeeLens-v1.0-release.apk     # Production release
├── CoffeeLens-v1.0-debug.apk       # Debug build (optional)
└── SHA256SUMS                      # Checksums for verification
```

## Checklist sebelum publish
- [ ] Signed release APK (app-release.apk)
- [ ] VersionCode & VersionName di build.gradle.kts sudah benar
- [ ] MinSdk 26, TargetSdk 34
- [ ] ProGuard/R8 enabled
- [ ] TFLite model (`coffee_leaf_model.tflite`) + `labels.txt` di assets
- [ ] Test di Xiaomi Redmi Note 8 (API 28)
- [ ] SHA256 checksum dibuat: `sha256sum *.apk > SHA256SUMS`

## Update halaman download
Edit `index.html` → cari `id="downloadBtn"`:
```html
<a href="downloads/CoffeeLens-v1.0-release.apk"
   class="btn btn-primary"
   data-i18n="download_btn">
  ⬇ Download APK (25 MB)
</a>
```
Hapus `aria-disabled="true"` dan ganti text "Segera Tersedia".