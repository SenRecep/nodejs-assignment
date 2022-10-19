const messageBuilder = (requestType) =>
  `Merhaba, ${requestType} isteği attiniz`;

export const getRequest = (req, res) =>
  res.status(200).json({
    message: messageBuilder("GET"),
  });

export const postRequest = (req, res) =>
  res.status(200).json({
    message: messageBuilder("POST"),
  });

export const putRequest = (req, res) =>
  res.status(200).json({
    message: messageBuilder("PUT"),
  });

export const deleteRequest = (req, res) =>
  res.status(200).json({
    message: messageBuilder("DELETE"),
  });
