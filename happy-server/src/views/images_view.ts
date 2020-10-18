import Image from '../models/Image';

export default {
  // retorna um orfanato na maneira que o frontend precisa dele
  render(image: Image) {
    return {
      id: image.id,
      // ip local da maquina
      url: `http://192.168.15.7:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
