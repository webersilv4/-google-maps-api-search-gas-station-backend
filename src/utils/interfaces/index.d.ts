export { };

declare global {
    namespace Express {
        interface Request {
            userId: string;
            firstName: string;
            lastName: string;
        }
    }



    interface ErrorMessageDefault {
        error: 'Algo deu errado tente novamente';
    }
}


