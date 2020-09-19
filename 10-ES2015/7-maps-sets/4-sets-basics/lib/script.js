const hashTags = ["nofilter", "justsaying", "winning", "yolo"];
const bannedHashTags = new Set(hashTags);

bannedHashTags.add("bestlife").add("selfie");

bannedHashTags.has("yolo");
// true

bannedHashTags.has("tbt");
// false

bannedHashTags.delete("winning");

//bannedHashTags.clear();

function filterHashTags(tags) {
  const bannedHashTaggies = new Set([
    "nofilter",
    "justsaying",
    "winning",
    "yolo",
  ]);
  return tags.filter((tag) => !bannedHashTaggies.has(tag));
}

const susansTags = ['happymonday', 'yolo', 'winning', 'sunset'];
console.log(filterHashTags(susansTags));
// happymonday, sunset

const ages = [45, 42, 3, 3, 12, 12, 46, 98];
const uniqueAges = Array.from(new Set(ages));
// or
// const uniqueAges = [...new Set(ages)];
console.log(ages);
console.log(uniqueAges);
