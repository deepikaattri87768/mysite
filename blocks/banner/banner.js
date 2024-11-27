export default function decorate(block) {
  console.log("banner", block);
  const rows = [...block.children];

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      console.log(col, "column", row);
      const pic = col.querySelector("picture");
      if (pic) {
        const picWrapper = pic.closest("div");
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add("banner-img-ban");
        }
      }
    });
  });
}
