// Disable hot-code-push
if (Package.reload) {
  Reload._reload.onMigrate(function () {
    return [false];
  });
}
