import { createNanoidenticonSvg, NanoidenticonAttributes } from "./utils";

const colorCombinations =
  "d281dcf7ebe5b450c8150506b3e786e50d8457615af9fafd21c9bd1188e3f8f8f8f285bb274722edf6f681bb86715174f7f9f8ff57392f3c51e1d8c483cddd014885ede9ea98c07a4e1f32e68d334590401d2240ffffffd62331040b39f9fcc86162560e0608d0f1c962bd8e45195ad4894dfdf8faeaffdcd5877bb1b0af9050a6d9cbdfeaca2e0e090910705a36efb154369faf6ff3fdfafa1f5f35e2c297f7f9fa5887abfcfbfb92c2d48a808dd3cbdafae7d43a285cefefef546f83824687ef8539fbf4e6171717737373e69b6f32271c99c698d5b57f07080bddeefbc34bbd48a1d4e5f1ecace3a8201f1efaf1fd2f92bd000601d2dcf3e3a3dd1823205cd0d0e1faedf4fdf997d5cb6f1b7c73957c2d4b5ef3ba362b0c26346878d006502a2b4ce9c25ff5fbfc6ea0cfe2e0e0e0a6af0403054186a1f7ece7a52665dbd9d2dee9992e292b768b74f6f8f8443b5564ca92daf1d2747085e09e80f2e7cc1f79cdebe9a6d6ebfc837f7bbcc587fdb7cd1f24219de388d75f3465528fe2e1dfee64d2383a39eaeaea68cdad322b4ad5d5d42af28e533249e7b98a1e699e212e36bb5a96eff2de1b14238d909afa9c2a27170d3f876ee874b0f4f3f69bb970372d2e29096f07e7d01766b4fbfcfcb6aafbd364a8170206b9948ed62946632153c7efcfeac9fe684a9eb3adb976f9c0713a72f6f9f892edaf07021e4c6e8ced93ab5d574dd48f8bbce4b2151b02135a80f6d9f0753a16defaf3d6854bfafbf4ba1a62184d98121c1889dda5f64598767dd3e9f6ef94cbd6671582e9ecf0e98ed61d181ba4789d169a7b6b6dd9eefdfd2001bc0e1115a6da632965cc0c0f0747d5fdd37fc1123679d11f93a2a5f622bcebfdfee5c3398c774d79fce7d5eca8b53c384099797488c89dfef3e1344342cc3a66f4f3f2359c86de2c092b236deeefef76c8bac34f4dfbfafdeda48e5224b5f0f3f9efa2f1827e83d1c8c7fbc32841346de0576adbf7ed845d6ac3e2eac4b6b69f1170d7aa3879a0c0550604ebf7f5bf87052b296cd3e107f1f9fe8b8980fbf5f6eaa07854254ab396a533c5f6391e26e2f1eb389eed053450fcf1f35988428b8ca7e4fefb9bfccd09030a9e789ea8e7f25a2910efeff085714d89408ff8ebd78de6b5141e31daf012d4219e263b26f3f8f9d1298347114aedbceeb5ddba2d6669fefafbcd3040373638fffefc7f416c010000f8f8f83f8ad0886565f2e475f2818e61233dbce2d31da3dd274ea4f3fcd79ea385658eb786dccef2c6a92b282f61605ed5f4d2869edbfdfcf4f0ccec9cbafbfcfdffc6fef18f69bfbee0f2fefefb3d8ceedaf8f747053664698c1e0607eee06314014bf5e9fe4a558d2d2d2d40a6ef1be08aa689c0fcfcffe3bcfd094970fcf2f1c5eac74b649eb6c7d1f5fee5322141d7d0a8eda298713249faf3f1b2b49f6b5badfe95d1f3f3cbe2e9e391a6a59b7b7d846674ced2b9cdbbe035373a99ffd8c1627d494c81ccdbf0ffe9dff9fafe957099575f8eece9ee867072539b5a254f77eaedeb33d6b3ececed1b023469aa86f2f5e04aaed6a725a0676582fcfcfdce6c72db4a84fefff508486af4f5f5f25692015f790e1829075cbcc9d9f64c053fa93183fde6d4dd7972fefdfe274052a3005fdbdcecf2efc5544a75fefefe17d3f4f0efef4a515f9776591c1702a985ebedeef3e0e9e6a381948cb3af1a0149fefeef7674e5fcfbe92b1e5110a7950a1206f2eaec4c6da60d133dfbf6fdc0244d210a18179580c61f35050c17fefefe0eaece110130bc93c8e1efbb56494cced3eafdb07cbec8ce644667fbf4f6971d8ce6e6e696ce1beefafd715b77ca92bc02aa61fafef43c3b29914d40ca8c63f1f8fe4e5380c5b5d6a9d092653b9feafff441acc13a1254eaf3f0f5b7316177b0e0e2e4dc9694ecdc87680c6844499f524e4eeeeaecb3b943e5f9f2697668a3434c591241e6bfa8baeeaff0e4fd5e3238b7556703181626d1a1c70c4106040decf4dbc49380100e13f9ebca61615749554df8fba9fe4a89333f45e8e7e7db9de1301132dbdabf2f835d841c60fdfbf7a9ddd72f328e071210f5fdfe3c163cf8f2fe3d90cb170116fb43a25acea7236d92fbf0eff6bb96a51749d0f1a7f1ecf63f2844cef9ebeae258404372cf6470e6f6fb827b80fdfdfe9dd397541a4b29c994ebe6eb232827cdb2d7d3d884080108386458f845aa5e1654d0e0fbf4e0c8445a7a71cfc3f5bf785b4e19f5fdf8aca9a70d282deee2d2b84163705662da8e7bfde9eb190e2e7cafa3dee7d9281b25e5eeef63acb8090807346e76f8fbdf1a5071f5f0fbb9b1ba603f3df8f8c3feb9a86d5e76dfd2e83be2e246425cf3fdf6b8c8b5012045288e769de015f6fef359ab6ad3587d9179c1e0fa93f7f6f6733c6ceaf1daddc1b28697badafdf7f5b6bd39395af8fff0a08f8d0c0408c2d1d2e3579d5f3272f7eee1e8ad37362112fbfdfeba86901c1c2d15b7d3e7e9e9222740fdf7f86c8eb2363828f6f6f7d17c96ecfdd5d24c933c518044394df2fbfbdc3978110b147871a1e1b8eb270f21d6dddd985b0c47374461ae85f2f5f1635c61fdf8f3d8657c050915e5f4d6475962b65061141100abe7df070101eae9dd4d5c1a04405cfbf4d32f76b8010100686669bebebe2e8ba9f9d7ad173a2825203ce6dceb9d8794021316f6fde2b35c4913214a9bdbceccfba30f0f08ece8ee23b3ae942122c8c4880f16181f64cd61d6fdf4b36eaaa2b4f9f4fac6fac8fbf9fbb2dae9ed5548100d0bb1cedef391ab1b0b116b6a67d9e096efe9e6ad94c7f3677c564366c0c590dfe4dc8c4e60ddfdf417502be1e3e53b264681ba88210321ab8996e2cba11402082ea6d6d1224d75a2cef5f4f5e16f9b276ac7080d0af7f7f26473abfffef6908ac323212c50b1c2d2e1d8444a65d3d9d9b842752927188daab3f5470354155eeef6f041c7d8291818f2be8c95a5bf030a1affffffa6718c0707079446412abcb4474863c57288fdf7f9f2faf39717554a404c347f89f3f8fad7360e2a3865c2f5c4d42965131e1b6fe8d0c310730e231d5db4bcf8fcf8372c44fefefee13198f5f5f5ca41836a39982a252bd9dde3a69107703435dbe2e1acacac396089fdfde3f5bdb72729025bb5dbdc7527213e1b74a924f1e7d6332327d9dfe086a6bf6582cafefcf6f9c9e88888c4eefefced528b4a364af3f5f4be5606290e3c467685f35235241627fbfbf289e9c9f4faf8d6625c34a48f22171b35586cfff4fa45163e8acc9ee4e7fa597255efefe0164125204563ebeceddcc045010d04194e65ff245e391544e7ebeb96c3dd848a98e5c4deecede4206774e5ddfae784dc251e2bb77b27fdf7fb5b597efaf4f31a1d1029211ef6f6f6c8c895020403a65a86c9cac63b0f3bffffff9f477c5a6875b6c2b5a3625c13060ce2eba9f761980c16068c9ed2e0a04d514f93efeffb03cac6080106eff3e1f666532f2532fdfefe5f79d422595d56bbc4edc652110e05b5b6b9535b60020b0987bf86efbaeca35886c6c3fdedc9900f0e05fdfdfd7ff8bc3b3a43f6eef5bfb5cc91190cd2ddcf251f28710c27e0febbe8986d021a1d4fe5c4e6e1db656679c4c3dce487d1788bd6eafbd7c42d803377acf5ede2182f15200402f5fadb0a6ab8242e92ab327ed6d9eb21336afdfdfa7c659e16040cf8f8f16c6e5f104573f5fdfd66bfc2050609ae7465f2f1ef1da5faf9fcf0df85b258545cfaf0e5cac4bc06030ceae9e95e4e3e6d1e3ffefdfdbbf9e0faefed8dc3bbd38a8b383839a9bbafc21540131d029e98affaa361790e69dbb9e0a5f3e034174becfda75da59937263f60f2a7f126a3040807d9d5acb4353b333333ddf1f0989bb75d3974f6f1f3a8e7328c4160fbfafadda1476b50a1fafbfbe05c3b353f75e853caebf2b30d3860f170c4dffa9b401229986d7cf2bc7f171b1de9ede0f294d1181009f7f7f4ba643d040504f456545bf6a3d7b5f7fdfcfdf9deb2e63b9fffffff1f3e120aaaf9fefbe3b9f9f30b090b558c7edfe4c5e0d9db3f1e477b91a40d0d15888ebff0e7a18c628bebe4d8b2d6df168aa7eff3ebe3afc72d2f27defe80ba1776b84f7f5a373cfacba01c3a59ef7c89849eae13120cfcfcfc4974bd71597dfcb19acce0d9162d65bd85b4e4e7a6343548e35f687a88bbf9cd75470e24cb77771410159d7bc00ee0b647373ffecb64b574681e2d5dc9b29adbe9fb0f2006e7cdb360927e2a0414fdfefea07b651d2d2ceff4fae35467";

function* generator(seed: string): Generator<number, never, never> {
  const randSeed: number[] = new Array(4).fill(0);
  for (let i = 0; i < seed.length; i++) {
    randSeed[i % 4] =
      (randSeed[i % 4] << 5) - randSeed[i % 4] + seed.charCodeAt(i);
  }

  while (true) {
    const t = randSeed[0] ^ (randSeed[0] << 11);
    randSeed.splice(0, 1);
    randSeed[3] = randSeed[2] ^ (randSeed[2] >> 19) ^ t ^ (t >> 8);
    yield (randSeed[3] >>> 0) / ((1 << 31) >>> 0);
  }
}

function joinCoords(...coords: number[]) {
  return coords.reduce((p, v) => (v < 0 ? p + v : p + " " + v), "");
}

function getArcPath(startPoint: number, endPoint: number): string {
  const largeArcFlag = (endPoint - startPoint + 4) % 4 > 2 ? 1 : 0;
  const startDrawX = startPoint === 0 ? 4 : startPoint === 2 ? -4 : 0;
  const startDrawY = startPoint === 3 ? 4 : startPoint === 1 ? -4 : 0;
  const endDrawX = endPoint === 0 ? 4 : endPoint === 2 ? -4 : 0;
  const endDrawY = endPoint === 3 ? 4 : endPoint === 1 ? -4 : 0;
  const deltaDrawX = endDrawX - startDrawX;
  const deltaDrawY = endDrawY - startDrawY;
  return `a4 4 0 ${largeArcFlag}0${joinCoords(deltaDrawX, deltaDrawY)}`;
}

function generatePathData(values: number[][]): string[] {
  // evenForeground, oddForeground, evenSpot, oddSpot
  let paths: string[] = ["", "", "", ""];
  // Each square on the grid is 4 points to draw (right, top, left, bottom). bits 0-3 represent foreground colors, and 4-7 represent spot colors.
  const pointsToDraw = values.map((row) =>
    row.map((v) => (v === 0 ? 0 : v === 1 ? 0x0f : 0xf0))
  );
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const points = pointsToDraw[y][x];
      if ((points & 0x88) === 0) continue; // no bottom point to start from; we only draw from the bottom point since other points will be drawn from other bottom points
      const shift = points & 0xf ? 0 : 4;
      const path = (shift >> 1) | ((x ^ y) & 1);
      let currentX = x,
        currentY = y,
        currentPoint = 3; // start at bottom
      paths[path] += `M${9 * x} ${9 * y}`;
      let currentStartPoint = currentPoint;
      while (true) {
        pointsToDraw[currentY][currentX] &= ~((1 << shift) << currentPoint);
        const nextX =
          currentPoint === 0 || currentPoint === 3
            ? currentX + 1
            : currentX - 1;
        const nextY =
          currentPoint === 2 || currentPoint === 3
            ? currentY + 1
            : currentY - 1;
        const nextPoint = (currentPoint + 3) % 4;
        if (nextX === x && nextY === y && nextPoint === 3) {
          // returned to beginning of current path
          if (currentPoint !== currentStartPoint) {
            paths[path] += getArcPath(currentStartPoint, currentPoint);
          }
          paths[path] += `q0-5 5-5`;
          break;
        }
        if (
          nextX < 0 ||
          nextX > 7 ||
          nextY < 0 ||
          nextY > 7 ||
          (pointsToDraw[nextY][nextX] & ((1 << shift) << nextPoint)) === 0
        ) {
          // move to next point on current square
          currentPoint = (currentPoint + 1) % 4;
          if (
            (pointsToDraw[currentY][currentX] &
              ((1 << shift) << currentPoint)) ===
            0
          ) {
            // loop closed, assume returned to beginning since that must be the case
            // and if somehow not it avoids an infinite loop compared to checking if current === start
            if (currentPoint === currentStartPoint) {
              // circled back onto self without leaving
              paths[path] += `a4 4 0 000-8a4 4 0 000 8`;
            } else {
              // not a circle
              paths[path] += getArcPath(currentStartPoint, currentPoint);
            }
            break;
          }
        } else {
          // move to new square
          const deltaDrawX = (nextX - currentX) * 5;
          const deltaDrawY = (nextY - currentY) * 5;
          const controlDrawX = deltaDrawX === deltaDrawY ? deltaDrawX : 0;
          const controlDrawY = deltaDrawX === deltaDrawY ? 0 : deltaDrawY;
          if (currentPoint !== currentStartPoint) {
            // draw arc then quadratic curve
            paths[path] += getArcPath(currentStartPoint, currentPoint);
            paths[path] += `q${joinCoords(
              controlDrawX,
              controlDrawY,
              deltaDrawX,
              deltaDrawY
            )}`;
          } else {
            if (currentX === x && currentY === y && currentPoint === 3) {
              // is start, draw curve
              paths[path] += `q${joinCoords(
                controlDrawX,
                controlDrawY,
                deltaDrawX,
                deltaDrawY
              )}`;
            } else {
              // is just entered and immediately leaving, continue quadratic curve
              paths[path] += `t${joinCoords(deltaDrawX, deltaDrawY)}`;
            }
          }
          currentX = nextX;
          currentY = nextY;
          currentPoint = nextPoint;
          currentStartPoint = currentPoint;
        }
      }
    }
  }
  return paths;
}

export function createNanoidenticon(address: string): NanoidenticonAttributes {
  const random = generator(address);

  // preserve v1 pattern
  for (let i = 0; i < 18; i++) random.next();

  const values: (0 | 1 | 2)[][] = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 4; x++) {
      values[y][x] = values[y][7 - x] = Math.floor(
        random.next().value * 2.3
      ) as 0 | 1 | 2;
    }
  }

  const colorStartChar = Math.floor(random.next().value * 337) * 18;
  const pathData = generatePathData(values);
  const backgroundFill = `#${colorCombinations.slice(
    colorStartChar,
    colorStartChar + 6
  )}`;
  const foregroundFill = `#${colorCombinations.slice(
    colorStartChar + 6,
    colorStartChar + 12
  )}`;
  const spotFill = `#${colorCombinations.slice(
    colorStartChar + 12,
    colorStartChar + 18
  )}`;

  return {
    viewBox: "-6.5 -10.5 76 76",
    paths: [
      {
        d: "M-6.5-4.5q0-6 6-6h64q6 0 6 6v64q0 6-6 6h-64q-6 0-6-6z",
        fill: backgroundFill,
      },
      { d: pathData[0], fill: foregroundFill },
      { d: pathData[1], fill: foregroundFill },
      { d: pathData[2], fill: spotFill },
      { d: pathData[3], fill: spotFill },
    ],
  };
}
