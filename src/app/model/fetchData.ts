/**
 * Interfaz con el formato de los datos que envía la API.
 * Recogeremos los datos y le extraeremos los deseados.
 */
export interface FetchData {
    data: [{
        box_office: string,
        chronology: number,
        cover_url: string,
        directed_by: string,
        duration: number,
        id: number,
        imdb_id: string,
        overview: string,
        phase: number,
        post_credit_scenes: number,
        release_date: string,
        saga: string,
        title: string,
        trailer_url: string
    }];
}