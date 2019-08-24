const sortRectsBy = (rects, sortBy) => {
  let sortedRects;
  switch (sortBy) {
    case 'size':
      sortedRects = rects.sort((a, b) =>
        (a.height + a.borderSize * 2) * (a.width + a.borderSize * 2) >
        (b.height + b.borderSize * 2) * (b.width + b.borderSize * 2)
          ? 1
          : -1
      );
      break;
    case 'borderSize':
      sortedRects = rects.sort((a, b) =>
        a.borderSize > b.borderSize ? 1 : -1
      );
      break;
    default:
      sortedRects = rects;
  }
  return sortedRects;
};

export default sortRectsBy;
