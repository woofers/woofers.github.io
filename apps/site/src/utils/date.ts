const isValidDate = (date: unknown) =>
  !!date && date instanceof Date && !isNaN(date.getTime())
