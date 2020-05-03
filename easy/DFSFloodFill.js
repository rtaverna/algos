let val = newColor
if (image[sr][sc] === val) return image
let neighbors = [image[sr][sc - 1],image[sr][sc + 1],image[sr - 1][sc],image[sr + 1][sc]]
console.log('n',neighbors)
let colorChange = neighbors.filter(pixel => pixel == image[sr][sc])
console.log('cc',colorChange)
if (colorChange.length === 0)    {
    return image
}   else    {
        
        image[sr][sc] = newColor
        colorChange.map(pixel => newColor)
        console.log('img',image)
        return floodFill(image,sr,sc,newColor)
}

var floodFill = function(image, sr, sc, newColor) {
    let old = image[sr][sc]
    if (old == newColor) return image
    image[sr][sc]= newColor
    
    const change = function(r,c){
      image[r][c] = newColor
      //up
      if(image[r-1]!= undefined && image[r-1][c] == old) change(r-1,c)
      //down
      if(image[r+1]!= undefined && image[r+1][c] == old) change(r+1,c)
      //left
      if(image[r][c-1] == old) change(r,c-1)
      //right
      if(image[r][c+1] == old) change(r,c+1)
    }
    //up
    if(image[sr-1]!= undefined && image[sr-1][sc] == old)change(sr-1,sc)
    //down
    if(image[sr+1]!== undefined && image[sr+1][sc] == old)change(sr+1,sc)
    //left
    if(image[sr][sc-1] == old)change(sr,sc-1)
    //right
    if(image[sr][sc+1] == old)change(sr,sc+1)
  
    return image
};