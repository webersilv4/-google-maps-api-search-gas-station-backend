import * as dotenv from 'dotenv';
import axios from 'axios';
import { Request, Response } from 'express';

dotenv.config();

const config = {
    headers: {
        'Access-control-allow-origin': '*'
    }
};

interface ElementsGoogleMapsApi {
    name: string;
    place_id: string;
    rating: number;
    user_ratings_total: number;
    reference: string;
    vicinity: string;
    opening_hours: boolean;
    geometry: {
        location: string;
    };
}

export async function googleMapsApi(req: Request, res: Response) {

    const { lat, lng } = req.params;

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=posto+gasolina&type=gas_station|point_of_interest|establishment&location=${lat},${lng}&radius=1500&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    await axios.get(url, config)
        .then(response => {

            const elements: Array<object> = [];
            const { results } = response.data;

            results.forEach((element: ElementsGoogleMapsApi) => {

                const { name, place_id,
                    rating, user_ratings_total,
                    reference, vicinity,
                    opening_hours } = element;

                elements.push({
                    name, place_id, rating, user_ratings_total, reference,
                    vicinity, opening_hours,
                    location: element.geometry.location
                });

            });

            res.json(elements);
        }).catch(() => {
            res.json({ error: 'Algo deu errado tente novamente' });
        });
}