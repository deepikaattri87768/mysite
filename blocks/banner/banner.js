export default function decorate(block) {
    console.log('banner',block)
   const rows = [...block.children];
    // block.classList.add(`banners-${cols.length}-ban`);
  
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        console.log(col,'column',row)
        const pic = col.querySelector('picture');
        if (pic) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            // picture is only content in column
            picWrapper.classList.add('banner-img-ban');
          }
        }
      });
    });
  }
  