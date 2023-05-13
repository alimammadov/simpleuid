const isUidUnique = async (uid) => {
  // Check whether the UID already exists in the database
  const exists = await db.checkUidExists(uid);
  return !exists;
};

const uid = await createUid(isUidUnique);
console.log(uid); // Output: "1A2B3C"
