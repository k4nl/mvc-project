import CustomError from '../utils/CustomError';
import statusCode from '../utils/status';

export default class Validate {
  public static requiredField(field: string, customMessage?: string) {
    if (!field) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Field is required',
      );
    }
  }

  public static isEmail(email: string, customMessage?: string) {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid email',
      );
    }
  }

  public static isNumber(number: any, customMessage?: string) {
    if (isNaN(number)) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid number',
      );
    }
  }

  public static isString(string: any, customMessage?: string) {
    if (typeof string !== 'string') {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid string',
      );
    }
  }

  public static isBoolean(boolean: any, customMessage?: string) {
    if (typeof boolean !== 'boolean') {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid boolean',
      );
    }
  }

  public static isObject(object: any, customMessage?: string) {
    if (typeof object !== 'object') {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid object',
      );
    }
  }

  public static isArray(array: any[], customMessage?: string) {
    if (!Array.isArray(array)) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid array',
      );
    }
  }

  public static isDate(date: any, customMessage?: string) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid date',
      );
    }
  }

  public static isFunction(func: any, customMessage?: string) {
    if (typeof func !== 'function') {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid function',
      );
    }
  }

  public static isUndefined(value: any, customMessage?: string) {
    if (typeof value !== 'undefined') {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid undefined',
      );
    }
  }

  public static isNull(value: any, customMessage?: string) {
    if (typeof value !== null) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid null',
      );
    }
  }

  public static isNullOrUndefined(value: any, customMessage?: string) {
    if (typeof value !== null && typeof value !== 'undefined') {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid null or undefined',
      );
    }
  }

  public static isObjectEmpty(object: any, customMessage?: string) {
    if (Object.keys(object).length === 0) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid object empty',
      );
    }
  }

  public static isObjectNotEmpty(object: any, customMessage?: string) {
    if (Object.keys(object).length !== 0) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid object not empty',
      );
    }
  }

  public static isObjectKey(object: any, key: string, customMessage?: string) {
    if (!object[key]) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid object key',
      );
    }
  }

  public static isObjectKeyEmpty(object: any, key: string, customMessage?: string) {
    if (object[key]) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid object key empty',
      );
    }
  }

  public static isObjectKeyNotEmpty(object: any, key: string, customMessage?: string) {
    if (!object[key]) {
      throw new CustomError(
        statusCode.badRequest,
        customMessage || 'Invalid object key not empty',
      );
    }
  }
  
  /// ... and so on  
  
}