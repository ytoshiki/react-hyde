const INITIAL_STATE = {
  sections: [
    {
      title: "家具",
      id: 1,
      imageUrl: "image10-min.jpg",
      linkUrl: "shop/furniture"
    },

    {
      title: "インテリア雑貨",
      id: 2,
      imageUrl: "image11-min.jpg",
      linkUrl: "shop/interior"
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
