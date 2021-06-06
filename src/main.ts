import { createExpressServer } from 'routing-controllers';
import 'reflect-metadata';

export const cwd = __dirname;

const app = createExpressServer({
  controllers: [__dirname + '/controllers/*.js'],
});

app.listen(3000);