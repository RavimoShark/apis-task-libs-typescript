/**
 * Ravimoshark Task API
 * This is an API to interact with Ravimoshark task database. # Introduction This API allow to create, modify and delete task, visits, technicians and interventions. # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Ravimoshark User Authentication](https://ravimoshark.com/back/apis/auth/latest). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@ravimoshark.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Pieces } from './pieces';
import { Tasks } from './tasks';


/**
 * Intervention information.
 */
export interface Interventions { 
    id?: number;
    refArticle?: string;
    piece?: Pieces;
    tasksId?: number;
    task?: Tasks;
    quantity?: number;
    createdAt?: string;
    updatedAt?: string;
    deleted?: boolean;
}