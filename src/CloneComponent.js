import React, { useEffect } from "react";
import ThanhPhoHoChiMinh from './boundary/raw/ThanhPhoHoChiMinh.json';
import {districtList} from './boundary/raw/District';

const writeFile = (result, fileName) => {
  const parseResult = JSON.parse(result);
      parseResult.data.forEach((item) => {
        item.COLLECTION = JSON.parse(item.COLLECTION);
        item.ShapeE3 = JSON.parse(item.ShapeE3);
      });
      // const converParseResult = parseResult.data.map((item) => {
      //   return {
      //     Title: item.Title,
      //     UniqueName: item.UniqueName,
      //     TYPE: item.TYPE,
      //     COLLECTION: item.COLLECTION,
      //     ShapeE3: item.ShapeE3
      //   };
      // });
      const converParseResult = parseResult;
      var a = document.createElement("a");
      a.download = `${fileName}.json`;
      a.href = window.URL.createObjectURL(
        new Blob([JSON.stringify(converParseResult)], {
          type: "text/plain",
        })
      );
      a.click();
};

const cloneDistrict = (UniqueName, Path) => {
  var myHeaders = new Headers();
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append(
    "sec-ch-ua",
    '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36"
  );
  myHeaders.append("sec-ch-ua-platform", '"macOS"');
  myHeaders.append("content-type", "application/json");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Origin", "https://bando.tphcm.gov.vn");
  myHeaders.append("Sec-Fetch-Site", "same-origin");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Sec-Fetch-Dest", "empty");
  const headerAppend = "https://bando.tphcm.gov.vn/ogis?admin=" + UniqueName;
  myHeaders.append(
    "Referer",
    // eslint-disable-next-line no-useless-concat
    headerAppend
  );
  myHeaders.append("Accept-Language", "en-US,en;q=0.9");
  myHeaders.append("Cookie", "_frontend=u0021DwMmUZHOompUn9Mk6kBz84d1gt+W5uYJ+g2RJE158bV5iVsypXotQ3YyowydemjF1JhJFkpMzBPlJhQ=; vdmsAccesstoken=Y5QRFBVCWl2ChDPBhbhEKaSUx_AwBWi2w7d1YBMn99n91QNNt1FMdjXthq-5aI5IFp5gqTY_jYMn8JMGMXHjJ3jl-8ba7oMuJF0NhQx9VoJknEwaJnopzkkYB6X7pPy6Vm8pdj4S8Xfiwyxnyu3dwvEe7t97-yjph_7a_XTqEKX1UPlQmBE5KbGLn4tBlGMZj9gdeM41utuHecnW4FIQa27BcjQ3hD7Pp5Zt4dH-ZgXMDEePx7W-4uxfk61zJFHKZpNPc7AiHTdcZeRCbIx8rQHBQulo0pGH4X8MAvNQ5WP8w6aRU6-nlHLjatx8rGwPt5qZFNjD0m83ucQSq8vbIycIrBOLVH_GgHpADnLYdkon9SvtzsATLjV2l9BKI_dBmOgy7NGLfx9J3tJbLmGVywIW3P5rDHxwoumUQIkhsHwcKa0NE4iCd55RTPg1gn6gXz3zXA; _ga=GA1.3.2137406461.1626539564; __zi=2000.SSZzejyD3CuZYUJyq04NpZA8iFw47rd0Aihix8u1Iu8utF-gqKTBWtoO-QVUHacFUjtzfTmEIunuqFwdCpWo.1; vdmsPublicAccesstoken=9QZctbLajaMJtONgg9I9_tlMdphZ7Tpq1swVdUuCTiMOKq_dLrxututTS-bF0VdBDGoPZ-H3-x8KqVL-GrQCMhGRDyQdtvrFujX7i5Z6oFmMyC3sUAgpWbUA4hcz1IYYxzGOBhVYG_vOZjbDv8lHHhqJhpdU5hH_1FcYNw3xjkp07EInwpdtZQlfrXOc2AYdVgo1jVhmUTXCNfevnFCug7p4cc53pRf4onk6uZRifsGD_RFcy7Qmq4uci6CI1qF62pvnMqxqOkPa0oavPwBhZBnesQ30NKZM9ctBO1xzoCv3ph-dT91LIH7I2cgF2hcD_9OXKRa7ZFvH682A-Py9sfdpiCYR_jZkWlKmX0FVkiSMn-IOyt8HX53-5MJUrk568XQXghqPORlC0vVvhUSgGfIgN8D1GywtsZUBhXxXn7jFo50HvAZxVJoLnV_Judb-uF0KlQ; _gid=GA1.3.1716234216.1633315157; _gat=1; _frontend=!JcAFfUnxidb7SOEk6kBz84d1gt+W5hze4QfK7tHJ4R4lkVz5g/8XDorIyh0BSQ+HG+xjJHA+tf/OlF8=");

  const path = Path;
  var raw = JSON.stringify({
    path,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://bando.tphcm.gov.vn/service/ogis/administrative",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      writeFile(result, UniqueName);
    })
    .catch((error) => console.log("error", error));
};

const cloneHoChiMinhCity = () => {
  var myHeaders = new Headers();
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36");
  myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
  myHeaders.append("content-type", "application/json");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Origin", "https://bando.tphcm.gov.vn");
  myHeaders.append("Sec-Fetch-Site", "same-origin");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Sec-Fetch-Dest", "empty");
  myHeaders.append("Referer", "https://bando.tphcm.gov.vn/ogis?admin=ThanhPhoHoChiMinh");
  myHeaders.append("Accept-Language", "en-US,en;q=0.9");
  myHeaders.append("Cookie", "_frontend=u0021DwMmUZHOompUn9Mk6kBz84d1gt+W5uYJ+g2RJE158bV5iVsypXotQ3YyowydemjF1JhJFkpMzBPlJhQ=; vdmsAccesstoken=Y5QRFBVCWl2ChDPBhbhEKaSUx_AwBWi2w7d1YBMn99n91QNNt1FMdjXthq-5aI5IFp5gqTY_jYMn8JMGMXHjJ3jl-8ba7oMuJF0NhQx9VoJknEwaJnopzkkYB6X7pPy6Vm8pdj4S8Xfiwyxnyu3dwvEe7t97-yjph_7a_XTqEKX1UPlQmBE5KbGLn4tBlGMZj9gdeM41utuHecnW4FIQa27BcjQ3hD7Pp5Zt4dH-ZgXMDEePx7W-4uxfk61zJFHKZpNPc7AiHTdcZeRCbIx8rQHBQulo0pGH4X8MAvNQ5WP8w6aRU6-nlHLjatx8rGwPt5qZFNjD0m83ucQSq8vbIycIrBOLVH_GgHpADnLYdkon9SvtzsATLjV2l9BKI_dBmOgy7NGLfx9J3tJbLmGVywIW3P5rDHxwoumUQIkhsHwcKa0NE4iCd55RTPg1gn6gXz3zXA; _ga=GA1.3.2137406461.1626539564; __zi=2000.SSZzejyD3CuZYUJyq04NpZA8iFw47rd0Aihix8u1Iu8utF-gqKTBWtoO-QVUHacFUjtzfTmEIunuqFwdCpWo.1; vdmsPublicAccesstoken=9QZctbLajaMJtONgg9I9_tlMdphZ7Tpq1swVdUuCTiMOKq_dLrxututTS-bF0VdBDGoPZ-H3-x8KqVL-GrQCMhGRDyQdtvrFujX7i5Z6oFmMyC3sUAgpWbUA4hcz1IYYxzGOBhVYG_vOZjbDv8lHHhqJhpdU5hH_1FcYNw3xjkp07EInwpdtZQlfrXOc2AYdVgo1jVhmUTXCNfevnFCug7p4cc53pRf4onk6uZRifsGD_RFcy7Qmq4uci6CI1qF62pvnMqxqOkPa0oavPwBhZBnesQ30NKZM9ctBO1xzoCv3ph-dT91LIH7I2cgF2hcD_9OXKRa7ZFvH682A-Py9sfdpiCYR_jZkWlKmX0FVkiSMn-IOyt8HX53-5MJUrk568XQXghqPORlC0vVvhUSgGfIgN8D1GywtsZUBhXxXn7jFo50HvAZxVJoLnV_Judb-uF0KlQ; _gid=GA1.3.1716234216.1633315157; _gat=1; _frontend=!5tw/F/dr0qhqWPgk6kBz84d1gt+W5lM2LYNv+hQNO5YkanB53LcRdvuGhG1bkLMjSfLp1S3yxjhpGns=");
  
  var raw = JSON.stringify({
    "path": "/root/vdms/tangthu/data/administrative/thanhphohochiminh"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://bando.tphcm.gov.vn/service/ogis/administrative", requestOptions)
    .then(response => response.text())
    .then(result => writeFile(result))
    .catch(error => console.log('error', error));
};

export default function CloneComponent() {
  useEffect(() => {
    // for (let i = 0; i < ThanhPhoHoChiMinh.data.length; i++) {
    //   setTimeout(() => {
    //     const distric = ThanhPhoHoChiMinh.data[i];
    //     cloneDistrict(distric.UniqueName, distric.Path);
    //   }, i * 500);
    // }
    // cloneHoChiMinhCity();

    Object.values(districtList).forEach((item) => {
      for (let i = 0; i < item.data.length; i++) {
        setTimeout(() => {
          const distric = item.data[i];
          cloneDistrict(distric.UniqueName, distric.Path);
        }, i * 5)
      }
    });
  }, []);

  return <div></div>;
}
