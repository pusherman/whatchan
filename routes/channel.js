exports.search = function(req, res){
  res.send([
    {"id":1,"name":"cnn","hd":"123","sd":"12"},
    {"id":2,"name":"cnn2","hd":"1398","sd":"14"},
    {"id":3,"name":"cnn3","hd":"778","sd":"27"},
  ]);
};