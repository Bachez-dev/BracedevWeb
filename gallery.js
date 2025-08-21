const gallery = document.getElementById('gallery');
  const centerText = document.getElementById('centerText');
  const totalImages = 20;
  const innerCount = 10;
  const outerCount = totalImages - innerCount;
  const rect = centerText.getBoundingClientRect();
  const galleryRect = gallery.getBoundingClientRect();
  const galleryCenterX = galleryRect.left + galleryRect.width / 2;
  const galleryCenterY = galleryRect.top + galleryRect.height / 2;

  const dx = Math.max(
    Math.abs(rect.left - galleryCenterX),
    Math.abs(rect.right - galleryCenterX)
  );
  const dy = Math.max(
    Math.abs(rect.top - galleryCenterY),
    Math.abs(rect.bottom - galleryCenterY)
  );
  const textRadius = Math.sqrt(dx * dx + dy * dy);

  const imageHalfDiagonal = Math.sqrt(200*200 + 200*200) / 2;
  const innerRadius = textRadius + imageHalfDiagonal + 30;

  const ringSpacing = 150;
  const outerRadius = innerRadius + ringSpacing;

  function pxToPercentX(px) {
    return (px / gallery.clientWidth) * 100;
  }
  function pxToPercentY(px) {
    return (px / gallery.clientHeight) * 100;
  }

  for (let i = 0; i < innerCount; i++) {
    const angle = (i / innerCount) * 2 * Math.PI;
    const x = 50 + pxToPercentX(innerRadius * Math.cos(angle));
    const y = 50 + pxToPercentY(innerRadius * Math.sin(angle));

    const div = document.createElement('div');
    div.className = 'image';
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;

    const img = document.createElement('img');
    const myImagess = [
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG",
      "images/fitnesstemplateone.PNG"
    ]
    img.src = myImagess[i];
    img.alt = `Gallery ${i + 1}`;

    div.appendChild(img);
    gallery.appendChild(div);
  }

  for (let i = 0; i < outerCount; i++) {
    const angle = (i / outerCount) * 2 * Math.PI;
    const x = 50 + pxToPercentX(outerRadius * Math.cos(angle));
    const y = 50 + pxToPercentY(outerRadius * Math.sin(angle));

    const div = document.createElement('div');
    div.className = 'image';
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;

    const myImages = [
      "images/realestateone.webp",
      "images/realestateone.webp",
      "images/realestateone.webp",
      "images/realestateone.webp",
      "images/realestateone.webp",
      "images/realestateone.webp",
      "images/realestateone.webp",
      "images/realestateone.webp",
      "images/realestateone.webp",
      "images/realestateone.webp"
    ];

    const img = document.createElement('img');
    img.src = myImages[i];
    img.alt = `Gallery ${innerCount + i + 1}`;

    div.appendChild(img);
    gallery.appendChild(div);
  }