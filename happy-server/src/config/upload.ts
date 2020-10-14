import multer from 'multer';
import path from 'path';

// multer lida com armazenamento de imagens

export default {
  storage: multer.diskStorage({
    // __dirname é o diretorio atual
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      // dar um nome para o arquivo, substituindo espaços por underline
      const fileName = `${Date.now()}-${file.originalname}`;
      // erro, nome do arquivo
      cb(null, fileName);
    },
  }),
};
