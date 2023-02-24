const worker: Worker = self as any;

worker.onmessage = (event: MessageEvent<string>) => {
  const id = event.data;
  console.log("Message received from main script");
  // worker.postMessage(id);

  fetch("https://jsonplaceholder.typicode.com/todos/" + id)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      worker.postMessage(json);
    });
};

worker.onerror = (error: ErrorEvent) => {
  console.log("Error received from main script");
  worker.postMessage(error);
};
