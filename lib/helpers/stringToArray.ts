const stringToArray = (object: string | any[]) => {
  return typeof object === 'string' ? Array(object) : object
}

export { stringToArray }
