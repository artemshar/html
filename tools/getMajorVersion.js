function getMajorVersion(versionString) {
  const parts = versionString.split(".");
  const majorVersion = parseInt(parts[0], 10);
  return majorVersion;
}
