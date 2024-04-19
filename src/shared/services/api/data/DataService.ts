import { Api } from '../ApiConfig';
import { ApiResult, MedicineInterface } from '../interfaces/MedicineInterface';

const getAll = async (
    page: number,
    order: string,
): Promise<ApiResult | Error> => {
    try {
        const { data } = await Api().get(
            `/data?_page=${page}${order === 'asc' ? '&_sort=published_at' : '&_sort=-published_at'}`,
        );

        return data;
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

const getById = async (id: string): Promise<MedicineInterface | Error> => {
    try {
        const { data } = await Api().get(`/data?id=${id}`);

        return data[0];
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

const getByName = async (page: number, name: string, order: string) => {
    try {
        const { data } = await Api().get(
            `/data?_page=${page}&name=${name}${order === 'asc' ? '&_sort=published_at' : '&_sort=-published_at'}`,
        );

        return data;
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

const getByCompany = async (page: number, company: string, order: string) => {
    try {
        const { data } = await Api().get(
            `/data?_page=${page}&company=${company}${order === 'asc' ? '&_sort=published_at' : '&_sort=-published_at'}`,
        );

        return data;
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

const getByNameAndCompany = async (
    page: number,
    name: string,
    company: string,
    order: string,
) => {
    try {
        const { data } = await Api().get(
            `/data?_page=${page}&name=${name}&company=${company}${order === 'asc' ? '&_sort=published_at' : '&_sort=-published_at'}`,
        );

        return data;
    } catch (error) {
        return new Error('Erro ao baixar o PDF');
    }
};

const downloadPdf = async () => {
    try {
        const pdfUrl = '/pdf_sample.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'pdf_sample.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();
        link.remove();

        URL.revokeObjectURL(pdfUrl);
    } catch (error) {
        return new Error('Erro ao consultar a API');
    }
};

export const DataServices = {
    getAll,
    getById,
    getByName,
    getByCompany,
    getByNameAndCompany,
    downloadPdf,
};
