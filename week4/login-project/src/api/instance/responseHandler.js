export function successHandler(response) {
  const { data, headers } = response;
  return { ...data, headers };
}

export function errorHandler(error) {
  if (error.request) {
    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
    // Node.js의 http.ClientRequest 인스턴스입니다.
    console.log(error.request);
  } else {
    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
    console.log("Error", error.message);
  }

  return Promise.reject(new Error("요청 도중 에러 발생"));
}
