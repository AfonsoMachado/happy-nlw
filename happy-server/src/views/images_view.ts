import Image from '../models/Image';

export default {
  // retorna um orfanato na maneira que o frontend precisa dele
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
