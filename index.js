var recipes ={};

function updateObjectWithKeyandValue(object, key, value){
Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
destructivelyUpdateObjectWithKeyAndValue (object, 'prop2', 2)
object

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key){
var newObject = delete object.key
return newObject
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
