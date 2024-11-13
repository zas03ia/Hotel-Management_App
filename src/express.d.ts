// @types/express.d.ts
import { File } from 'multer';

declare global {
  namespace Express {
    interface Request {
      files?: File[] | { [fieldname: string]: File[] };
    }
  }
}
