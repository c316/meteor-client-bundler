// Disable hot-code-push
if (Package.reload) {
  Reload.onMigrate(function () {
    return [false];
  });
}
