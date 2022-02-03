/**
 * Interfaz de película con los datos necesarios
 */
export interface Movie {
    id: number;
    name: string;
    imageUrl: string;
    synopsis: string;
    year: number;
}