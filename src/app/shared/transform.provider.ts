import { Injectable } from '@angular/core';
import { parseString } from 'xml2js';

@Injectable()
export class TransformProvider {

    public convertToJson<T>(data: string): T {
        var res: T;
        parseString(data, { explicitArray: false }, (error, result) => {

            if (error) {
                throw new Error(error);
            } else {
                res = result;
            }

        });
        return res;
    }
}