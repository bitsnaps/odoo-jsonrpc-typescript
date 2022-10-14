import { OdooClient } from './OdooClient';
import { SingletonClient } from './SingletonClient';


const odooClient = async (): Promise<OdooClient> => {
    return await SingletonClient.createOdooClient({
        url: 'https://demo3.odoo.com',
        dbName: 'demo_150_1665774259',
        username: 'admin',
        password: 'admin'
    });
}

odooClient().then((client) => {    
    console.log(`uid: ${client['uid']}, dbName: ${client['dbName']}`);
});

