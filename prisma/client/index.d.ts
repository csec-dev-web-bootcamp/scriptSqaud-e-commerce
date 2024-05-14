
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Payment_detail
 * 
 */
export type Payment_detail = $Result.DefaultSelection<Prisma.$Payment_detailPayload>
/**
 * Model Order_detail
 * 
 */
export type Order_detail = $Result.DefaultSelection<Prisma.$Order_detailPayload>
/**
 * Model Track_order
 * 
 */
export type Track_order = $Result.DefaultSelection<Prisma.$Track_orderPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Status: {
  PREPARING: 'PREPARING',
  SHIPPED: 'SHIPPED',
  DELIVERD: 'DELIVERD'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.payment_detail`: Exposes CRUD operations for the **Payment_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_details
    * const payment_details = await prisma.payment_detail.findMany()
    * ```
    */
  get payment_detail(): Prisma.Payment_detailDelegate<ExtArgs>;

  /**
   * `prisma.order_detail`: Exposes CRUD operations for the **Order_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_details
    * const order_details = await prisma.order_detail.findMany()
    * ```
    */
  get order_detail(): Prisma.Order_detailDelegate<ExtArgs>;

  /**
   * `prisma.track_order`: Exposes CRUD operations for the **Track_order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Track_orders
    * const track_orders = await prisma.track_order.findMany()
    * ```
    */
  get track_order(): Prisma.Track_orderDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    Category: 'Category',
    Product: 'Product',
    Reviews: 'Reviews',
    Order: 'Order',
    Payment_detail: 'Payment_detail',
    Order_detail: 'Order_detail',
    Track_order: 'Track_order',
    Post: 'Post'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'profile' | 'category' | 'product' | 'reviews' | 'order' | 'payment_detail' | 'order_detail' | 'track_order' | 'post'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>,
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Payment_detail: {
        payload: Prisma.$Payment_detailPayload<ExtArgs>
        fields: Prisma.Payment_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Payment_detailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Payment_detailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload>
          }
          findFirst: {
            args: Prisma.Payment_detailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Payment_detailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload>
          }
          findMany: {
            args: Prisma.Payment_detailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload>[]
          }
          create: {
            args: Prisma.Payment_detailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload>
          }
          createMany: {
            args: Prisma.Payment_detailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Payment_detailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload>
          }
          update: {
            args: Prisma.Payment_detailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload>
          }
          deleteMany: {
            args: Prisma.Payment_detailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Payment_detailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Payment_detailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Payment_detailPayload>
          }
          aggregate: {
            args: Prisma.Payment_detailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment_detail>
          }
          groupBy: {
            args: Prisma.Payment_detailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Payment_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.Payment_detailCountArgs<ExtArgs>,
            result: $Utils.Optional<Payment_detailCountAggregateOutputType> | number
          }
        }
      }
      Order_detail: {
        payload: Prisma.$Order_detailPayload<ExtArgs>
        fields: Prisma.Order_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Order_detailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Order_detailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload>
          }
          findFirst: {
            args: Prisma.Order_detailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Order_detailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload>
          }
          findMany: {
            args: Prisma.Order_detailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload>[]
          }
          create: {
            args: Prisma.Order_detailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload>
          }
          createMany: {
            args: Prisma.Order_detailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Order_detailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload>
          }
          update: {
            args: Prisma.Order_detailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload>
          }
          deleteMany: {
            args: Prisma.Order_detailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Order_detailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Order_detailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Order_detailPayload>
          }
          aggregate: {
            args: Prisma.Order_detailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_detail>
          }
          groupBy: {
            args: Prisma.Order_detailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.Order_detailCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_detailCountAggregateOutputType> | number
          }
        }
      }
      Track_order: {
        payload: Prisma.$Track_orderPayload<ExtArgs>
        fields: Prisma.Track_orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Track_orderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Track_orderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload>
          }
          findFirst: {
            args: Prisma.Track_orderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Track_orderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload>
          }
          findMany: {
            args: Prisma.Track_orderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload>[]
          }
          create: {
            args: Prisma.Track_orderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload>
          }
          createMany: {
            args: Prisma.Track_orderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Track_orderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload>
          }
          update: {
            args: Prisma.Track_orderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload>
          }
          deleteMany: {
            args: Prisma.Track_orderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Track_orderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Track_orderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Track_orderPayload>
          }
          aggregate: {
            args: Prisma.Track_orderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrack_order>
          }
          groupBy: {
            args: Prisma.Track_orderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Track_orderGroupByOutputType>[]
          }
          count: {
            args: Prisma.Track_orderCountArgs<ExtArgs>,
            result: $Utils.Optional<Track_orderCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    payment: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Payment_detailWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderDetail: number
    reviews: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetail?: boolean | ProductCountOutputTypeCountOrderDetailArgs
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_detailWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderDetail: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetail?: boolean | OrderCountOutputTypeCountOrderDetailArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_detailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      payment: Prisma.$Payment_detailPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    payment<T extends User$paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'findMany'> | Null>;

    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.payment
   */
  export type User$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    where?: Payment_detailWhereInput
    orderBy?: Payment_detailOrderByWithRelationInput | Payment_detailOrderByWithRelationInput[]
    cursor?: Payment_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_detailScalarFieldEnum | Payment_detailScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    phone: string | null
    address: string | null
    userId: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    address: string | null
    userId: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    phone: number
    address: number
    userId: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    phone?: true
    address?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    phone?: true
    address?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    phone?: true
    address?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    phone: string
    address: string
    userId: string
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    address?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    phone?: boolean
    address?: boolean
    userId?: boolean
  }


  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      address: string
      userId: string
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }


  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly address: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    categoryName: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    categoryName: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    categoryName: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    categoryName?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    categoryName?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    categoryName?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    categoryName: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    categoryName?: boolean
  }


  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryName: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends Category$productArgs<ExtArgs> = {}>(args?: Subset<T, Category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly categoryName: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.product
   */
  export type Category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    stock: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    stock: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    stock: number | null
    price: number | null
    image: string | null
    description: string | null
    cloudId: string | null
    categoryId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stock: number | null
    price: number | null
    image: string | null
    description: string | null
    cloudId: string | null
    categoryId: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    stock: number
    price: number
    image: number
    description: number
    cloudId: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    stock?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    stock?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    price?: true
    image?: true
    description?: true
    cloudId?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    price?: true
    image?: true
    description?: true
    cloudId?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    price?: true
    image?: true
    description?: true
    cloudId?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    stock: number
    price: number
    image: string | null
    description: string
    cloudId: string | null
    categoryId: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock?: boolean
    price?: boolean
    image?: boolean
    description?: boolean
    cloudId?: boolean
    categoryId?: boolean
    orderDetail?: boolean | Product$orderDetailArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    stock?: boolean
    price?: boolean
    image?: boolean
    description?: boolean
    cloudId?: boolean
    categoryId?: boolean
  }


  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetail?: boolean | Product$orderDetailArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      orderDetail: Prisma.$Order_detailPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stock: number
      price: number
      image: string | null
      description: string
      cloudId: string | null
      categoryId: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orderDetail<T extends Product$orderDetailArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'findMany'> | Null>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reviews<T extends Product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly image: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly cloudId: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.orderDetail
   */
  export type Product$orderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    where?: Order_detailWhereInput
    orderBy?: Order_detailOrderByWithRelationInput | Order_detailOrderByWithRelationInput[]
    cursor?: Order_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }

  /**
   * Product.reviews
   */
  export type Product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: string | null
    comment: string | null
    rating: number | null
    userId: string | null
    productId: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: string | null
    comment: string | null
    rating: number | null
    userId: string | null
    productId: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    comment: number
    rating: number
    userId: number
    productId: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    userId?: true
    productId?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    userId?: true
    productId?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    userId?: true
    productId?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: string
    comment: string | null
    rating: number
    userId: string
    productId: string
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    userId?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    comment?: boolean
    rating?: boolean
    userId?: boolean
    productId?: boolean
  }


  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comment: string | null
      rating: number
      userId: string
      productId: string
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }


  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reviews that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
    **/
    create<T extends ReviewsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reviews.
     *     @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const reviews = await prisma.reviews.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReviewsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
    **/
    delete<T extends ReviewsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reviews model
   */ 
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'String'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly userId: FieldRef<"Reviews", 'String'>
    readonly productId: FieldRef<"Reviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    total: number | null
    time: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    total: number | null
    time: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    address: number
    total: number
    time: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    total?: true
    time?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    total?: true
    time?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    total?: true
    time?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    address: string
    total: number
    time: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    total?: boolean
    time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    orderDetail?: boolean | Order$orderDetailArgs<ExtArgs>
    paymentDetail?: boolean | Order$paymentDetailArgs<ExtArgs>
    trackOrder?: boolean | Order$trackOrderArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    address?: boolean
    total?: boolean
    time?: boolean
  }


  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    orderDetail?: boolean | Order$orderDetailArgs<ExtArgs>
    paymentDetail?: boolean | Order$paymentDetailArgs<ExtArgs>
    trackOrder?: boolean | Order$trackOrderArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      orderDetail: Prisma.$Order_detailPayload<ExtArgs>[]
      paymentDetail: Prisma.$Payment_detailPayload<ExtArgs> | null
      trackOrder: Prisma.$Track_orderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      address: string
      total: number
      time: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    orderDetail<T extends Order$orderDetailArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'findMany'> | Null>;

    paymentDetail<T extends Order$paymentDetailArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentDetailArgs<ExtArgs>>): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    trackOrder<T extends Order$trackOrderArgs<ExtArgs> = {}>(args?: Subset<T, Order$trackOrderArgs<ExtArgs>>): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly address: FieldRef<"Order", 'String'>
    readonly total: FieldRef<"Order", 'Int'>
    readonly time: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.orderDetail
   */
  export type Order$orderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    where?: Order_detailWhereInput
    orderBy?: Order_detailOrderByWithRelationInput | Order_detailOrderByWithRelationInput[]
    cursor?: Order_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }

  /**
   * Order.paymentDetail
   */
  export type Order$paymentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    where?: Payment_detailWhereInput
  }

  /**
   * Order.trackOrder
   */
  export type Order$trackOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    where?: Track_orderWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Payment_detail
   */

  export type AggregatePayment_detail = {
    _count: Payment_detailCountAggregateOutputType | null
    _avg: Payment_detailAvgAggregateOutputType | null
    _sum: Payment_detailSumAggregateOutputType | null
    _min: Payment_detailMinAggregateOutputType | null
    _max: Payment_detailMaxAggregateOutputType | null
  }

  export type Payment_detailAvgAggregateOutputType = {
    amount: number | null
  }

  export type Payment_detailSumAggregateOutputType = {
    amount: number | null
  }

  export type Payment_detailMinAggregateOutputType = {
    id: string | null
    amount: number | null
    currency: string | null
    time: Date | null
    userId: string | null
    orderId: string | null
  }

  export type Payment_detailMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    currency: string | null
    time: Date | null
    userId: string | null
    orderId: string | null
  }

  export type Payment_detailCountAggregateOutputType = {
    id: number
    amount: number
    currency: number
    time: number
    userId: number
    orderId: number
    _all: number
  }


  export type Payment_detailAvgAggregateInputType = {
    amount?: true
  }

  export type Payment_detailSumAggregateInputType = {
    amount?: true
  }

  export type Payment_detailMinAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    time?: true
    userId?: true
    orderId?: true
  }

  export type Payment_detailMaxAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    time?: true
    userId?: true
    orderId?: true
  }

  export type Payment_detailCountAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    time?: true
    userId?: true
    orderId?: true
    _all?: true
  }

  export type Payment_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment_detail to aggregate.
     */
    where?: Payment_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payment_details to fetch.
     */
    orderBy?: Payment_detailOrderByWithRelationInput | Payment_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Payment_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payment_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payment_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payment_details
    **/
    _count?: true | Payment_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_detailMaxAggregateInputType
  }

  export type GetPayment_detailAggregateType<T extends Payment_detailAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_detail[P]>
      : GetScalarType<T[P], AggregatePayment_detail[P]>
  }




  export type Payment_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Payment_detailWhereInput
    orderBy?: Payment_detailOrderByWithAggregationInput | Payment_detailOrderByWithAggregationInput[]
    by: Payment_detailScalarFieldEnum[] | Payment_detailScalarFieldEnum
    having?: Payment_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_detailCountAggregateInputType | true
    _avg?: Payment_detailAvgAggregateInputType
    _sum?: Payment_detailSumAggregateInputType
    _min?: Payment_detailMinAggregateInputType
    _max?: Payment_detailMaxAggregateInputType
  }

  export type Payment_detailGroupByOutputType = {
    id: string
    amount: number
    currency: string
    time: Date
    userId: string
    orderId: string
    _count: Payment_detailCountAggregateOutputType | null
    _avg: Payment_detailAvgAggregateOutputType | null
    _sum: Payment_detailSumAggregateOutputType | null
    _min: Payment_detailMinAggregateOutputType | null
    _max: Payment_detailMaxAggregateOutputType | null
  }

  type GetPayment_detailGroupByPayload<T extends Payment_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_detailGroupByOutputType[P]>
        }
      >
    >


  export type Payment_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    time?: boolean
    userId?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_detail"]>

  export type Payment_detailSelectScalar = {
    id?: boolean
    amount?: boolean
    currency?: boolean
    time?: boolean
    userId?: boolean
    orderId?: boolean
  }


  export type Payment_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $Payment_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment_detail"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      currency: string
      time: Date
      userId: string
      orderId: string
    }, ExtArgs["result"]["payment_detail"]>
    composites: {}
  }


  type Payment_detailGetPayload<S extends boolean | null | undefined | Payment_detailDefaultArgs> = $Result.GetResult<Prisma.$Payment_detailPayload, S>

  type Payment_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Payment_detailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Payment_detailCountAggregateInputType | true
    }

  export interface Payment_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment_detail'], meta: { name: 'Payment_detail' } }
    /**
     * Find zero or one Payment_detail that matches the filter.
     * @param {Payment_detailFindUniqueArgs} args - Arguments to find a Payment_detail
     * @example
     * // Get one Payment_detail
     * const payment_detail = await prisma.payment_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Payment_detailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Payment_detailFindUniqueArgs<ExtArgs>>
    ): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment_detail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Payment_detailFindUniqueOrThrowArgs} args - Arguments to find a Payment_detail
     * @example
     * // Get one Payment_detail
     * const payment_detail = await prisma.payment_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Payment_detailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Payment_detailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_detailFindFirstArgs} args - Arguments to find a Payment_detail
     * @example
     * // Get one Payment_detail
     * const payment_detail = await prisma.payment_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Payment_detailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Payment_detailFindFirstArgs<ExtArgs>>
    ): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_detailFindFirstOrThrowArgs} args - Arguments to find a Payment_detail
     * @example
     * // Get one Payment_detail
     * const payment_detail = await prisma.payment_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Payment_detailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Payment_detailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payment_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_detailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_details
     * const payment_details = await prisma.payment_detail.findMany()
     * 
     * // Get first 10 Payment_details
     * const payment_details = await prisma.payment_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_detailWithIdOnly = await prisma.payment_detail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Payment_detailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Payment_detailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment_detail.
     * @param {Payment_detailCreateArgs} args - Arguments to create a Payment_detail.
     * @example
     * // Create one Payment_detail
     * const Payment_detail = await prisma.payment_detail.create({
     *   data: {
     *     // ... data to create a Payment_detail
     *   }
     * })
     * 
    **/
    create<T extends Payment_detailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Payment_detailCreateArgs<ExtArgs>>
    ): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payment_details.
     *     @param {Payment_detailCreateManyArgs} args - Arguments to create many Payment_details.
     *     @example
     *     // Create many Payment_details
     *     const payment_detail = await prisma.payment_detail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Payment_detailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Payment_detailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment_detail.
     * @param {Payment_detailDeleteArgs} args - Arguments to delete one Payment_detail.
     * @example
     * // Delete one Payment_detail
     * const Payment_detail = await prisma.payment_detail.delete({
     *   where: {
     *     // ... filter to delete one Payment_detail
     *   }
     * })
     * 
    **/
    delete<T extends Payment_detailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Payment_detailDeleteArgs<ExtArgs>>
    ): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment_detail.
     * @param {Payment_detailUpdateArgs} args - Arguments to update one Payment_detail.
     * @example
     * // Update one Payment_detail
     * const payment_detail = await prisma.payment_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Payment_detailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Payment_detailUpdateArgs<ExtArgs>>
    ): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payment_details.
     * @param {Payment_detailDeleteManyArgs} args - Arguments to filter Payment_details to delete.
     * @example
     * // Delete a few Payment_details
     * const { count } = await prisma.payment_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Payment_detailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Payment_detailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_details
     * const payment_detail = await prisma.payment_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Payment_detailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Payment_detailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment_detail.
     * @param {Payment_detailUpsertArgs} args - Arguments to update or create a Payment_detail.
     * @example
     * // Update or create a Payment_detail
     * const payment_detail = await prisma.payment_detail.upsert({
     *   create: {
     *     // ... data to create a Payment_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_detail we want to update
     *   }
     * })
    **/
    upsert<T extends Payment_detailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Payment_detailUpsertArgs<ExtArgs>>
    ): Prisma__Payment_detailClient<$Result.GetResult<Prisma.$Payment_detailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payment_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_detailCountArgs} args - Arguments to filter Payment_details to count.
     * @example
     * // Count the number of Payment_details
     * const count = await prisma.payment_detail.count({
     *   where: {
     *     // ... the filter for the Payment_details we want to count
     *   }
     * })
    **/
    count<T extends Payment_detailCountArgs>(
      args?: Subset<T, Payment_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Payment_detailAggregateArgs>(args: Subset<T, Payment_detailAggregateArgs>): Prisma.PrismaPromise<GetPayment_detailAggregateType<T>>

    /**
     * Group by Payment_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Payment_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Payment_detailGroupByArgs['orderBy'] }
        : { orderBy?: Payment_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Payment_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment_detail model
   */
  readonly fields: Payment_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Payment_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payment_detail model
   */ 
  interface Payment_detailFieldRefs {
    readonly id: FieldRef<"Payment_detail", 'String'>
    readonly amount: FieldRef<"Payment_detail", 'Int'>
    readonly currency: FieldRef<"Payment_detail", 'String'>
    readonly time: FieldRef<"Payment_detail", 'DateTime'>
    readonly userId: FieldRef<"Payment_detail", 'String'>
    readonly orderId: FieldRef<"Payment_detail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment_detail findUnique
   */
  export type Payment_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * Filter, which Payment_detail to fetch.
     */
    where: Payment_detailWhereUniqueInput
  }

  /**
   * Payment_detail findUniqueOrThrow
   */
  export type Payment_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * Filter, which Payment_detail to fetch.
     */
    where: Payment_detailWhereUniqueInput
  }

  /**
   * Payment_detail findFirst
   */
  export type Payment_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * Filter, which Payment_detail to fetch.
     */
    where?: Payment_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payment_details to fetch.
     */
    orderBy?: Payment_detailOrderByWithRelationInput | Payment_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payment_details.
     */
    cursor?: Payment_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payment_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payment_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payment_details.
     */
    distinct?: Payment_detailScalarFieldEnum | Payment_detailScalarFieldEnum[]
  }

  /**
   * Payment_detail findFirstOrThrow
   */
  export type Payment_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * Filter, which Payment_detail to fetch.
     */
    where?: Payment_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payment_details to fetch.
     */
    orderBy?: Payment_detailOrderByWithRelationInput | Payment_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payment_details.
     */
    cursor?: Payment_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payment_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payment_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payment_details.
     */
    distinct?: Payment_detailScalarFieldEnum | Payment_detailScalarFieldEnum[]
  }

  /**
   * Payment_detail findMany
   */
  export type Payment_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * Filter, which Payment_details to fetch.
     */
    where?: Payment_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payment_details to fetch.
     */
    orderBy?: Payment_detailOrderByWithRelationInput | Payment_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payment_details.
     */
    cursor?: Payment_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payment_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payment_details.
     */
    skip?: number
    distinct?: Payment_detailScalarFieldEnum | Payment_detailScalarFieldEnum[]
  }

  /**
   * Payment_detail create
   */
  export type Payment_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment_detail.
     */
    data: XOR<Payment_detailCreateInput, Payment_detailUncheckedCreateInput>
  }

  /**
   * Payment_detail createMany
   */
  export type Payment_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payment_details.
     */
    data: Payment_detailCreateManyInput | Payment_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment_detail update
   */
  export type Payment_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment_detail.
     */
    data: XOR<Payment_detailUpdateInput, Payment_detailUncheckedUpdateInput>
    /**
     * Choose, which Payment_detail to update.
     */
    where: Payment_detailWhereUniqueInput
  }

  /**
   * Payment_detail updateMany
   */
  export type Payment_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payment_details.
     */
    data: XOR<Payment_detailUpdateManyMutationInput, Payment_detailUncheckedUpdateManyInput>
    /**
     * Filter which Payment_details to update
     */
    where?: Payment_detailWhereInput
  }

  /**
   * Payment_detail upsert
   */
  export type Payment_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment_detail to update in case it exists.
     */
    where: Payment_detailWhereUniqueInput
    /**
     * In case the Payment_detail found by the `where` argument doesn't exist, create a new Payment_detail with this data.
     */
    create: XOR<Payment_detailCreateInput, Payment_detailUncheckedCreateInput>
    /**
     * In case the Payment_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Payment_detailUpdateInput, Payment_detailUncheckedUpdateInput>
  }

  /**
   * Payment_detail delete
   */
  export type Payment_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
    /**
     * Filter which Payment_detail to delete.
     */
    where: Payment_detailWhereUniqueInput
  }

  /**
   * Payment_detail deleteMany
   */
  export type Payment_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment_details to delete
     */
    where?: Payment_detailWhereInput
  }

  /**
   * Payment_detail without action
   */
  export type Payment_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_detail
     */
    select?: Payment_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_detailInclude<ExtArgs> | null
  }


  /**
   * Model Order_detail
   */

  export type AggregateOrder_detail = {
    _count: Order_detailCountAggregateOutputType | null
    _avg: Order_detailAvgAggregateOutputType | null
    _sum: Order_detailSumAggregateOutputType | null
    _min: Order_detailMinAggregateOutputType | null
    _max: Order_detailMaxAggregateOutputType | null
  }

  export type Order_detailAvgAggregateOutputType = {
    subTotal: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_detailSumAggregateOutputType = {
    subTotal: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_detailMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    subTotal: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_detailMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    subTotal: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_detailCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    subTotal: number
    quantity: number
    price: number
    _all: number
  }


  export type Order_detailAvgAggregateInputType = {
    subTotal?: true
    quantity?: true
    price?: true
  }

  export type Order_detailSumAggregateInputType = {
    subTotal?: true
    quantity?: true
    price?: true
  }

  export type Order_detailMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    subTotal?: true
    quantity?: true
    price?: true
  }

  export type Order_detailMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    subTotal?: true
    quantity?: true
    price?: true
  }

  export type Order_detailCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    subTotal?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type Order_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_detail to aggregate.
     */
    where?: Order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_details to fetch.
     */
    orderBy?: Order_detailOrderByWithRelationInput | Order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Order_details
    **/
    _count?: true | Order_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_detailMaxAggregateInputType
  }

  export type GetOrder_detailAggregateType<T extends Order_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_detail[P]>
      : GetScalarType<T[P], AggregateOrder_detail[P]>
  }




  export type Order_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_detailWhereInput
    orderBy?: Order_detailOrderByWithAggregationInput | Order_detailOrderByWithAggregationInput[]
    by: Order_detailScalarFieldEnum[] | Order_detailScalarFieldEnum
    having?: Order_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_detailCountAggregateInputType | true
    _avg?: Order_detailAvgAggregateInputType
    _sum?: Order_detailSumAggregateInputType
    _min?: Order_detailMinAggregateInputType
    _max?: Order_detailMaxAggregateInputType
  }

  export type Order_detailGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    subTotal: number
    quantity: number
    price: number
    _count: Order_detailCountAggregateOutputType | null
    _avg: Order_detailAvgAggregateOutputType | null
    _sum: Order_detailSumAggregateOutputType | null
    _min: Order_detailMinAggregateOutputType | null
    _max: Order_detailMaxAggregateOutputType | null
  }

  type GetOrder_detailGroupByPayload<T extends Order_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Order_detailGroupByOutputType[P]>
        }
      >
    >


  export type Order_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    subTotal?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_detail"]>

  export type Order_detailSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    subTotal?: boolean
    quantity?: boolean
    price?: boolean
  }


  export type Order_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $Order_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order_detail"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      subTotal: number
      quantity: number
      price: number
    }, ExtArgs["result"]["order_detail"]>
    composites: {}
  }


  type Order_detailGetPayload<S extends boolean | null | undefined | Order_detailDefaultArgs> = $Result.GetResult<Prisma.$Order_detailPayload, S>

  type Order_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Order_detailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_detailCountAggregateInputType | true
    }

  export interface Order_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order_detail'], meta: { name: 'Order_detail' } }
    /**
     * Find zero or one Order_detail that matches the filter.
     * @param {Order_detailFindUniqueArgs} args - Arguments to find a Order_detail
     * @example
     * // Get one Order_detail
     * const order_detail = await prisma.order_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Order_detailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Order_detailFindUniqueArgs<ExtArgs>>
    ): Prisma__Order_detailClient<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_detail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Order_detailFindUniqueOrThrowArgs} args - Arguments to find a Order_detail
     * @example
     * // Get one Order_detail
     * const order_detail = await prisma.order_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Order_detailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Order_detailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Order_detailClient<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailFindFirstArgs} args - Arguments to find a Order_detail
     * @example
     * // Get one Order_detail
     * const order_detail = await prisma.order_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Order_detailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Order_detailFindFirstArgs<ExtArgs>>
    ): Prisma__Order_detailClient<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailFindFirstOrThrowArgs} args - Arguments to find a Order_detail
     * @example
     * // Get one Order_detail
     * const order_detail = await prisma.order_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Order_detailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Order_detailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Order_detailClient<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_details
     * const order_details = await prisma.order_detail.findMany()
     * 
     * // Get first 10 Order_details
     * const order_details = await prisma.order_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_detailWithIdOnly = await prisma.order_detail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Order_detailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Order_detailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_detail.
     * @param {Order_detailCreateArgs} args - Arguments to create a Order_detail.
     * @example
     * // Create one Order_detail
     * const Order_detail = await prisma.order_detail.create({
     *   data: {
     *     // ... data to create a Order_detail
     *   }
     * })
     * 
    **/
    create<T extends Order_detailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Order_detailCreateArgs<ExtArgs>>
    ): Prisma__Order_detailClient<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_details.
     *     @param {Order_detailCreateManyArgs} args - Arguments to create many Order_details.
     *     @example
     *     // Create many Order_details
     *     const order_detail = await prisma.order_detail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Order_detailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Order_detailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_detail.
     * @param {Order_detailDeleteArgs} args - Arguments to delete one Order_detail.
     * @example
     * // Delete one Order_detail
     * const Order_detail = await prisma.order_detail.delete({
     *   where: {
     *     // ... filter to delete one Order_detail
     *   }
     * })
     * 
    **/
    delete<T extends Order_detailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Order_detailDeleteArgs<ExtArgs>>
    ): Prisma__Order_detailClient<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_detail.
     * @param {Order_detailUpdateArgs} args - Arguments to update one Order_detail.
     * @example
     * // Update one Order_detail
     * const order_detail = await prisma.order_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Order_detailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Order_detailUpdateArgs<ExtArgs>>
    ): Prisma__Order_detailClient<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_details.
     * @param {Order_detailDeleteManyArgs} args - Arguments to filter Order_details to delete.
     * @example
     * // Delete a few Order_details
     * const { count } = await prisma.order_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Order_detailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Order_detailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_details
     * const order_detail = await prisma.order_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Order_detailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Order_detailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_detail.
     * @param {Order_detailUpsertArgs} args - Arguments to update or create a Order_detail.
     * @example
     * // Update or create a Order_detail
     * const order_detail = await prisma.order_detail.upsert({
     *   create: {
     *     // ... data to create a Order_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_detail we want to update
     *   }
     * })
    **/
    upsert<T extends Order_detailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Order_detailUpsertArgs<ExtArgs>>
    ): Prisma__Order_detailClient<$Result.GetResult<Prisma.$Order_detailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailCountArgs} args - Arguments to filter Order_details to count.
     * @example
     * // Count the number of Order_details
     * const count = await prisma.order_detail.count({
     *   where: {
     *     // ... the filter for the Order_details we want to count
     *   }
     * })
    **/
    count<T extends Order_detailCountArgs>(
      args?: Subset<T, Order_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_detailAggregateArgs>(args: Subset<T, Order_detailAggregateArgs>): Prisma.PrismaPromise<GetOrder_detailAggregateType<T>>

    /**
     * Group by Order_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Order_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_detailGroupByArgs['orderBy'] }
        : { orderBy?: Order_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Order_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order_detail model
   */
  readonly fields: Order_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Order_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order_detail model
   */ 
  interface Order_detailFieldRefs {
    readonly id: FieldRef<"Order_detail", 'String'>
    readonly orderId: FieldRef<"Order_detail", 'String'>
    readonly productId: FieldRef<"Order_detail", 'String'>
    readonly subTotal: FieldRef<"Order_detail", 'Int'>
    readonly quantity: FieldRef<"Order_detail", 'Int'>
    readonly price: FieldRef<"Order_detail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order_detail findUnique
   */
  export type Order_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * Filter, which Order_detail to fetch.
     */
    where: Order_detailWhereUniqueInput
  }

  /**
   * Order_detail findUniqueOrThrow
   */
  export type Order_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * Filter, which Order_detail to fetch.
     */
    where: Order_detailWhereUniqueInput
  }

  /**
   * Order_detail findFirst
   */
  export type Order_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * Filter, which Order_detail to fetch.
     */
    where?: Order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_details to fetch.
     */
    orderBy?: Order_detailOrderByWithRelationInput | Order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_details.
     */
    cursor?: Order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_details.
     */
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }

  /**
   * Order_detail findFirstOrThrow
   */
  export type Order_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * Filter, which Order_detail to fetch.
     */
    where?: Order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_details to fetch.
     */
    orderBy?: Order_detailOrderByWithRelationInput | Order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_details.
     */
    cursor?: Order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_details.
     */
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }

  /**
   * Order_detail findMany
   */
  export type Order_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * Filter, which Order_details to fetch.
     */
    where?: Order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_details to fetch.
     */
    orderBy?: Order_detailOrderByWithRelationInput | Order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Order_details.
     */
    cursor?: Order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_details.
     */
    skip?: number
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }

  /**
   * Order_detail create
   */
  export type Order_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a Order_detail.
     */
    data: XOR<Order_detailCreateInput, Order_detailUncheckedCreateInput>
  }

  /**
   * Order_detail createMany
   */
  export type Order_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Order_details.
     */
    data: Order_detailCreateManyInput | Order_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order_detail update
   */
  export type Order_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a Order_detail.
     */
    data: XOR<Order_detailUpdateInput, Order_detailUncheckedUpdateInput>
    /**
     * Choose, which Order_detail to update.
     */
    where: Order_detailWhereUniqueInput
  }

  /**
   * Order_detail updateMany
   */
  export type Order_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Order_details.
     */
    data: XOR<Order_detailUpdateManyMutationInput, Order_detailUncheckedUpdateManyInput>
    /**
     * Filter which Order_details to update
     */
    where?: Order_detailWhereInput
  }

  /**
   * Order_detail upsert
   */
  export type Order_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the Order_detail to update in case it exists.
     */
    where: Order_detailWhereUniqueInput
    /**
     * In case the Order_detail found by the `where` argument doesn't exist, create a new Order_detail with this data.
     */
    create: XOR<Order_detailCreateInput, Order_detailUncheckedCreateInput>
    /**
     * In case the Order_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Order_detailUpdateInput, Order_detailUncheckedUpdateInput>
  }

  /**
   * Order_detail delete
   */
  export type Order_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
    /**
     * Filter which Order_detail to delete.
     */
    where: Order_detailWhereUniqueInput
  }

  /**
   * Order_detail deleteMany
   */
  export type Order_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_details to delete
     */
    where?: Order_detailWhereInput
  }

  /**
   * Order_detail without action
   */
  export type Order_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_detail
     */
    select?: Order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_detailInclude<ExtArgs> | null
  }


  /**
   * Model Track_order
   */

  export type AggregateTrack_order = {
    _count: Track_orderCountAggregateOutputType | null
    _min: Track_orderMinAggregateOutputType | null
    _max: Track_orderMaxAggregateOutputType | null
  }

  export type Track_orderMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    address: string | null
    status: $Enums.Status | null
  }

  export type Track_orderMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    address: string | null
    status: $Enums.Status | null
  }

  export type Track_orderCountAggregateOutputType = {
    id: number
    orderId: number
    address: number
    status: number
    _all: number
  }


  export type Track_orderMinAggregateInputType = {
    id?: true
    orderId?: true
    address?: true
    status?: true
  }

  export type Track_orderMaxAggregateInputType = {
    id?: true
    orderId?: true
    address?: true
    status?: true
  }

  export type Track_orderCountAggregateInputType = {
    id?: true
    orderId?: true
    address?: true
    status?: true
    _all?: true
  }

  export type Track_orderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track_order to aggregate.
     */
    where?: Track_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Track_orders to fetch.
     */
    orderBy?: Track_orderOrderByWithRelationInput | Track_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Track_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Track_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Track_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Track_orders
    **/
    _count?: true | Track_orderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Track_orderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Track_orderMaxAggregateInputType
  }

  export type GetTrack_orderAggregateType<T extends Track_orderAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack_order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack_order[P]>
      : GetScalarType<T[P], AggregateTrack_order[P]>
  }




  export type Track_orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Track_orderWhereInput
    orderBy?: Track_orderOrderByWithAggregationInput | Track_orderOrderByWithAggregationInput[]
    by: Track_orderScalarFieldEnum[] | Track_orderScalarFieldEnum
    having?: Track_orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Track_orderCountAggregateInputType | true
    _min?: Track_orderMinAggregateInputType
    _max?: Track_orderMaxAggregateInputType
  }

  export type Track_orderGroupByOutputType = {
    id: string
    orderId: string
    address: string
    status: $Enums.Status
    _count: Track_orderCountAggregateOutputType | null
    _min: Track_orderMinAggregateOutputType | null
    _max: Track_orderMaxAggregateOutputType | null
  }

  type GetTrack_orderGroupByPayload<T extends Track_orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Track_orderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Track_orderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Track_orderGroupByOutputType[P]>
            : GetScalarType<T[P], Track_orderGroupByOutputType[P]>
        }
      >
    >


  export type Track_orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    address?: boolean
    status?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track_order"]>

  export type Track_orderSelectScalar = {
    id?: boolean
    orderId?: boolean
    address?: boolean
    status?: boolean
  }


  export type Track_orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }


  export type $Track_orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track_order"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      address: string
      status: $Enums.Status
    }, ExtArgs["result"]["track_order"]>
    composites: {}
  }


  type Track_orderGetPayload<S extends boolean | null | undefined | Track_orderDefaultArgs> = $Result.GetResult<Prisma.$Track_orderPayload, S>

  type Track_orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Track_orderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Track_orderCountAggregateInputType | true
    }

  export interface Track_orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track_order'], meta: { name: 'Track_order' } }
    /**
     * Find zero or one Track_order that matches the filter.
     * @param {Track_orderFindUniqueArgs} args - Arguments to find a Track_order
     * @example
     * // Get one Track_order
     * const track_order = await prisma.track_order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Track_orderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Track_orderFindUniqueArgs<ExtArgs>>
    ): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Track_order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Track_orderFindUniqueOrThrowArgs} args - Arguments to find a Track_order
     * @example
     * // Get one Track_order
     * const track_order = await prisma.track_order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Track_orderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Track_orderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Track_order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_orderFindFirstArgs} args - Arguments to find a Track_order
     * @example
     * // Get one Track_order
     * const track_order = await prisma.track_order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Track_orderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Track_orderFindFirstArgs<ExtArgs>>
    ): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Track_order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_orderFindFirstOrThrowArgs} args - Arguments to find a Track_order
     * @example
     * // Get one Track_order
     * const track_order = await prisma.track_order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Track_orderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Track_orderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Track_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_orderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Track_orders
     * const track_orders = await prisma.track_order.findMany()
     * 
     * // Get first 10 Track_orders
     * const track_orders = await prisma.track_order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const track_orderWithIdOnly = await prisma.track_order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Track_orderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Track_orderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Track_order.
     * @param {Track_orderCreateArgs} args - Arguments to create a Track_order.
     * @example
     * // Create one Track_order
     * const Track_order = await prisma.track_order.create({
     *   data: {
     *     // ... data to create a Track_order
     *   }
     * })
     * 
    **/
    create<T extends Track_orderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Track_orderCreateArgs<ExtArgs>>
    ): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Track_orders.
     *     @param {Track_orderCreateManyArgs} args - Arguments to create many Track_orders.
     *     @example
     *     // Create many Track_orders
     *     const track_order = await prisma.track_order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Track_orderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Track_orderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track_order.
     * @param {Track_orderDeleteArgs} args - Arguments to delete one Track_order.
     * @example
     * // Delete one Track_order
     * const Track_order = await prisma.track_order.delete({
     *   where: {
     *     // ... filter to delete one Track_order
     *   }
     * })
     * 
    **/
    delete<T extends Track_orderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Track_orderDeleteArgs<ExtArgs>>
    ): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Track_order.
     * @param {Track_orderUpdateArgs} args - Arguments to update one Track_order.
     * @example
     * // Update one Track_order
     * const track_order = await prisma.track_order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Track_orderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Track_orderUpdateArgs<ExtArgs>>
    ): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Track_orders.
     * @param {Track_orderDeleteManyArgs} args - Arguments to filter Track_orders to delete.
     * @example
     * // Delete a few Track_orders
     * const { count } = await prisma.track_order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Track_orderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Track_orderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Track_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Track_orders
     * const track_order = await prisma.track_order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Track_orderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Track_orderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track_order.
     * @param {Track_orderUpsertArgs} args - Arguments to update or create a Track_order.
     * @example
     * // Update or create a Track_order
     * const track_order = await prisma.track_order.upsert({
     *   create: {
     *     // ... data to create a Track_order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track_order we want to update
     *   }
     * })
    **/
    upsert<T extends Track_orderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Track_orderUpsertArgs<ExtArgs>>
    ): Prisma__Track_orderClient<$Result.GetResult<Prisma.$Track_orderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Track_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_orderCountArgs} args - Arguments to filter Track_orders to count.
     * @example
     * // Count the number of Track_orders
     * const count = await prisma.track_order.count({
     *   where: {
     *     // ... the filter for the Track_orders we want to count
     *   }
     * })
    **/
    count<T extends Track_orderCountArgs>(
      args?: Subset<T, Track_orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Track_orderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_orderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Track_orderAggregateArgs>(args: Subset<T, Track_orderAggregateArgs>): Prisma.PrismaPromise<GetTrack_orderAggregateType<T>>

    /**
     * Group by Track_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Track_orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Track_orderGroupByArgs['orderBy'] }
        : { orderBy?: Track_orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Track_orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrack_orderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track_order model
   */
  readonly fields: Track_orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track_order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Track_orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Track_order model
   */ 
  interface Track_orderFieldRefs {
    readonly id: FieldRef<"Track_order", 'String'>
    readonly orderId: FieldRef<"Track_order", 'String'>
    readonly address: FieldRef<"Track_order", 'String'>
    readonly status: FieldRef<"Track_order", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Track_order findUnique
   */
  export type Track_orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * Filter, which Track_order to fetch.
     */
    where: Track_orderWhereUniqueInput
  }

  /**
   * Track_order findUniqueOrThrow
   */
  export type Track_orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * Filter, which Track_order to fetch.
     */
    where: Track_orderWhereUniqueInput
  }

  /**
   * Track_order findFirst
   */
  export type Track_orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * Filter, which Track_order to fetch.
     */
    where?: Track_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Track_orders to fetch.
     */
    orderBy?: Track_orderOrderByWithRelationInput | Track_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Track_orders.
     */
    cursor?: Track_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Track_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Track_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Track_orders.
     */
    distinct?: Track_orderScalarFieldEnum | Track_orderScalarFieldEnum[]
  }

  /**
   * Track_order findFirstOrThrow
   */
  export type Track_orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * Filter, which Track_order to fetch.
     */
    where?: Track_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Track_orders to fetch.
     */
    orderBy?: Track_orderOrderByWithRelationInput | Track_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Track_orders.
     */
    cursor?: Track_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Track_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Track_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Track_orders.
     */
    distinct?: Track_orderScalarFieldEnum | Track_orderScalarFieldEnum[]
  }

  /**
   * Track_order findMany
   */
  export type Track_orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * Filter, which Track_orders to fetch.
     */
    where?: Track_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Track_orders to fetch.
     */
    orderBy?: Track_orderOrderByWithRelationInput | Track_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Track_orders.
     */
    cursor?: Track_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Track_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Track_orders.
     */
    skip?: number
    distinct?: Track_orderScalarFieldEnum | Track_orderScalarFieldEnum[]
  }

  /**
   * Track_order create
   */
  export type Track_orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * The data needed to create a Track_order.
     */
    data: XOR<Track_orderCreateInput, Track_orderUncheckedCreateInput>
  }

  /**
   * Track_order createMany
   */
  export type Track_orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Track_orders.
     */
    data: Track_orderCreateManyInput | Track_orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Track_order update
   */
  export type Track_orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * The data needed to update a Track_order.
     */
    data: XOR<Track_orderUpdateInput, Track_orderUncheckedUpdateInput>
    /**
     * Choose, which Track_order to update.
     */
    where: Track_orderWhereUniqueInput
  }

  /**
   * Track_order updateMany
   */
  export type Track_orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Track_orders.
     */
    data: XOR<Track_orderUpdateManyMutationInput, Track_orderUncheckedUpdateManyInput>
    /**
     * Filter which Track_orders to update
     */
    where?: Track_orderWhereInput
  }

  /**
   * Track_order upsert
   */
  export type Track_orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * The filter to search for the Track_order to update in case it exists.
     */
    where: Track_orderWhereUniqueInput
    /**
     * In case the Track_order found by the `where` argument doesn't exist, create a new Track_order with this data.
     */
    create: XOR<Track_orderCreateInput, Track_orderUncheckedCreateInput>
    /**
     * In case the Track_order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Track_orderUpdateInput, Track_orderUncheckedUpdateInput>
  }

  /**
   * Track_order delete
   */
  export type Track_orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
    /**
     * Filter which Track_order to delete.
     */
    where: Track_orderWhereUniqueInput
  }

  /**
   * Track_order deleteMany
   */
  export type Track_orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track_orders to delete
     */
    where?: Track_orderWhereInput
  }

  /**
   * Track_order without action
   */
  export type Track_orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_order
     */
    select?: Track_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Track_orderInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
  }



  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    address: 'address',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    categoryName: 'categoryName'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stock: 'stock',
    price: 'price',
    image: 'image',
    description: 'description',
    cloudId: 'cloudId',
    categoryId: 'categoryId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    rating: 'rating',
    userId: 'userId',
    productId: 'productId'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    address: 'address',
    total: 'total',
    time: 'time'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Payment_detailScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    currency: 'currency',
    time: 'time',
    userId: 'userId',
    orderId: 'orderId'
  };

  export type Payment_detailScalarFieldEnum = (typeof Payment_detailScalarFieldEnum)[keyof typeof Payment_detailScalarFieldEnum]


  export const Order_detailScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    subTotal: 'subTotal',
    quantity: 'quantity',
    price: 'price'
  };

  export type Order_detailScalarFieldEnum = (typeof Order_detailScalarFieldEnum)[keyof typeof Order_detailScalarFieldEnum]


  export const Track_orderScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    address: 'address',
    status: 'status'
  };

  export type Track_orderScalarFieldEnum = (typeof Track_orderScalarFieldEnum)[keyof typeof Track_orderScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    orders?: OrderListRelationFilter
    payment?: Payment_detailListRelationFilter
    profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
    reviews?: ReviewsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    payment?: Payment_detailOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
    reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    orders?: OrderListRelationFilter
    payment?: Payment_detailListRelationFilter
    profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
    reviews?: ReviewsListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    phone?: StringFilter<"Profile"> | string
    address?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    address?: StringFilter<"Profile"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id" | "phone" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    phone?: StringWithAggregatesFilter<"Profile"> | string
    address?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    categoryName?: StringFilter<"Category"> | string
    product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryName?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    product?: ProductListRelationFilter
  }, "id" | "id" | "categoryName">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    categoryName?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    price?: IntFilter<"Product"> | number
    image?: StringNullableFilter<"Product"> | string | null
    description?: StringFilter<"Product"> | string
    cloudId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringFilter<"Product"> | string
    orderDetail?: Order_detailListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    reviews?: ReviewsListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrder
    cloudId?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    orderDetail?: Order_detailOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    price?: IntFilter<"Product"> | number
    image?: StringNullableFilter<"Product"> | string | null
    description?: StringFilter<"Product"> | string
    cloudId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringFilter<"Product"> | string
    orderDetail?: Order_detailListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    reviews?: ReviewsListRelationFilter
  }, "id" | "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrder
    cloudId?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    stock?: IntWithAggregatesFilter<"Product"> | number
    price?: IntWithAggregatesFilter<"Product"> | number
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description?: StringWithAggregatesFilter<"Product"> | string
    cloudId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryId?: StringWithAggregatesFilter<"Product"> | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: StringFilter<"Reviews"> | string
    comment?: StringNullableFilter<"Reviews"> | string | null
    rating?: IntFilter<"Reviews"> | number
    userId?: StringFilter<"Reviews"> | string
    productId?: StringFilter<"Reviews"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrderInput | SortOrder
    rating?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productId?: ReviewsUserIdProductIdCompoundUniqueInput
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    comment?: StringNullableFilter<"Reviews"> | string | null
    rating?: IntFilter<"Reviews"> | number
    userId?: StringFilter<"Reviews"> | string
    productId?: StringFilter<"Reviews"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id" | "userId_productId">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrderInput | SortOrder
    rating?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reviews"> | string
    comment?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    userId?: StringWithAggregatesFilter<"Reviews"> | string
    productId?: StringWithAggregatesFilter<"Reviews"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    total?: IntFilter<"Order"> | number
    time?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    orderDetail?: Order_detailListRelationFilter
    paymentDetail?: XOR<Payment_detailNullableRelationFilter, Payment_detailWhereInput> | null
    trackOrder?: XOR<Track_orderNullableRelationFilter, Track_orderWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    total?: SortOrder
    time?: SortOrder
    user?: UserOrderByWithRelationInput
    orderDetail?: Order_detailOrderByRelationAggregateInput
    paymentDetail?: Payment_detailOrderByWithRelationInput
    trackOrder?: Track_orderOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    total?: IntFilter<"Order"> | number
    time?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    orderDetail?: Order_detailListRelationFilter
    paymentDetail?: XOR<Payment_detailNullableRelationFilter, Payment_detailWhereInput> | null
    trackOrder?: XOR<Track_orderNullableRelationFilter, Track_orderWhereInput> | null
  }, "id" | "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    total?: SortOrder
    time?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    address?: StringWithAggregatesFilter<"Order"> | string
    total?: IntWithAggregatesFilter<"Order"> | number
    time?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type Payment_detailWhereInput = {
    AND?: Payment_detailWhereInput | Payment_detailWhereInput[]
    OR?: Payment_detailWhereInput[]
    NOT?: Payment_detailWhereInput | Payment_detailWhereInput[]
    id?: StringFilter<"Payment_detail"> | string
    amount?: IntFilter<"Payment_detail"> | number
    currency?: StringFilter<"Payment_detail"> | string
    time?: DateTimeFilter<"Payment_detail"> | Date | string
    userId?: StringFilter<"Payment_detail"> | string
    orderId?: StringFilter<"Payment_detail"> | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type Payment_detailOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    order?: OrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type Payment_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: Payment_detailWhereInput | Payment_detailWhereInput[]
    OR?: Payment_detailWhereInput[]
    NOT?: Payment_detailWhereInput | Payment_detailWhereInput[]
    amount?: IntFilter<"Payment_detail"> | number
    currency?: StringFilter<"Payment_detail"> | string
    time?: DateTimeFilter<"Payment_detail"> | Date | string
    userId?: StringFilter<"Payment_detail"> | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id" | "orderId">

  export type Payment_detailOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    _count?: Payment_detailCountOrderByAggregateInput
    _avg?: Payment_detailAvgOrderByAggregateInput
    _max?: Payment_detailMaxOrderByAggregateInput
    _min?: Payment_detailMinOrderByAggregateInput
    _sum?: Payment_detailSumOrderByAggregateInput
  }

  export type Payment_detailScalarWhereWithAggregatesInput = {
    AND?: Payment_detailScalarWhereWithAggregatesInput | Payment_detailScalarWhereWithAggregatesInput[]
    OR?: Payment_detailScalarWhereWithAggregatesInput[]
    NOT?: Payment_detailScalarWhereWithAggregatesInput | Payment_detailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment_detail"> | string
    amount?: IntWithAggregatesFilter<"Payment_detail"> | number
    currency?: StringWithAggregatesFilter<"Payment_detail"> | string
    time?: DateTimeWithAggregatesFilter<"Payment_detail"> | Date | string
    userId?: StringWithAggregatesFilter<"Payment_detail"> | string
    orderId?: StringWithAggregatesFilter<"Payment_detail"> | string
  }

  export type Order_detailWhereInput = {
    AND?: Order_detailWhereInput | Order_detailWhereInput[]
    OR?: Order_detailWhereInput[]
    NOT?: Order_detailWhereInput | Order_detailWhereInput[]
    id?: StringFilter<"Order_detail"> | string
    orderId?: StringFilter<"Order_detail"> | string
    productId?: StringFilter<"Order_detail"> | string
    subTotal?: IntFilter<"Order_detail"> | number
    quantity?: IntFilter<"Order_detail"> | number
    price?: IntFilter<"Order_detail"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type Order_detailOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type Order_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Order_detailWhereInput | Order_detailWhereInput[]
    OR?: Order_detailWhereInput[]
    NOT?: Order_detailWhereInput | Order_detailWhereInput[]
    orderId?: StringFilter<"Order_detail"> | string
    productId?: StringFilter<"Order_detail"> | string
    subTotal?: IntFilter<"Order_detail"> | number
    quantity?: IntFilter<"Order_detail"> | number
    price?: IntFilter<"Order_detail"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id" | "id">

  export type Order_detailOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: Order_detailCountOrderByAggregateInput
    _avg?: Order_detailAvgOrderByAggregateInput
    _max?: Order_detailMaxOrderByAggregateInput
    _min?: Order_detailMinOrderByAggregateInput
    _sum?: Order_detailSumOrderByAggregateInput
  }

  export type Order_detailScalarWhereWithAggregatesInput = {
    AND?: Order_detailScalarWhereWithAggregatesInput | Order_detailScalarWhereWithAggregatesInput[]
    OR?: Order_detailScalarWhereWithAggregatesInput[]
    NOT?: Order_detailScalarWhereWithAggregatesInput | Order_detailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order_detail"> | string
    orderId?: StringWithAggregatesFilter<"Order_detail"> | string
    productId?: StringWithAggregatesFilter<"Order_detail"> | string
    subTotal?: IntWithAggregatesFilter<"Order_detail"> | number
    quantity?: IntWithAggregatesFilter<"Order_detail"> | number
    price?: IntWithAggregatesFilter<"Order_detail"> | number
  }

  export type Track_orderWhereInput = {
    AND?: Track_orderWhereInput | Track_orderWhereInput[]
    OR?: Track_orderWhereInput[]
    NOT?: Track_orderWhereInput | Track_orderWhereInput[]
    id?: StringFilter<"Track_order"> | string
    orderId?: StringFilter<"Track_order"> | string
    address?: StringFilter<"Track_order"> | string
    status?: EnumStatusFilter<"Track_order"> | $Enums.Status
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type Track_orderOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    address?: SortOrder
    status?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type Track_orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: Track_orderWhereInput | Track_orderWhereInput[]
    OR?: Track_orderWhereInput[]
    NOT?: Track_orderWhereInput | Track_orderWhereInput[]
    address?: StringFilter<"Track_order"> | string
    status?: EnumStatusFilter<"Track_order"> | $Enums.Status
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id" | "id" | "orderId">

  export type Track_orderOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    address?: SortOrder
    status?: SortOrder
    _count?: Track_orderCountOrderByAggregateInput
    _max?: Track_orderMaxOrderByAggregateInput
    _min?: Track_orderMinOrderByAggregateInput
  }

  export type Track_orderScalarWhereWithAggregatesInput = {
    AND?: Track_orderScalarWhereWithAggregatesInput | Track_orderScalarWhereWithAggregatesInput[]
    OR?: Track_orderScalarWhereWithAggregatesInput[]
    NOT?: Track_orderScalarWhereWithAggregatesInput | Track_orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Track_order"> | string
    orderId?: StringWithAggregatesFilter<"Track_order"> | string
    address?: StringWithAggregatesFilter<"Track_order"> | string
    status?: EnumStatusWithAggregatesFilter<"Track_order"> | $Enums.Status
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    orders?: OrderCreateNestedManyWithoutUserInput
    payment?: Payment_detailCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    payment?: Payment_detailUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orders?: OrderUpdateManyWithoutUserNestedInput
    payment?: Payment_detailUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    payment?: Payment_detailUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type ProfileCreateInput = {
    id?: string
    phone: string
    address: string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    phone: string
    address: string
    userId: string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    phone: string
    address: string
    userId: string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    categoryName: string
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    categoryName: string
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    categoryName: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    orderDetail?: Order_detailCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
    reviews?: ReviewsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    categoryId: string
    orderDetail?: Order_detailUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDetail?: Order_detailUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    reviews?: ReviewsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    orderDetail?: Order_detailUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    categoryId: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsCreateInput = {
    id?: string
    comment?: string | null
    rating: number
    product: ProductCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: string
    comment?: string | null
    rating: number
    userId: string
    productId: string
  }

  export type ReviewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsCreateManyInput = {
    id?: string
    comment?: string | null
    rating: number
    userId: string
    productId: string
  }

  export type ReviewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    address: string
    total: number
    time?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    orderDetail?: Order_detailCreateNestedManyWithoutOrderInput
    paymentDetail?: Payment_detailCreateNestedOneWithoutOrderInput
    trackOrder?: Track_orderCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    address: string
    total: number
    time?: Date | string
    orderDetail?: Order_detailUncheckedCreateNestedManyWithoutOrderInput
    paymentDetail?: Payment_detailUncheckedCreateNestedOneWithoutOrderInput
    trackOrder?: Track_orderUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderDetail?: Order_detailUpdateManyWithoutOrderNestedInput
    paymentDetail?: Payment_detailUpdateOneWithoutOrderNestedInput
    trackOrder?: Track_orderUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetail?: Order_detailUncheckedUpdateManyWithoutOrderNestedInput
    paymentDetail?: Payment_detailUncheckedUpdateOneWithoutOrderNestedInput
    trackOrder?: Track_orderUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    address: string
    total: number
    time?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Payment_detailCreateInput = {
    id?: string
    amount: number
    currency: string
    time?: Date | string
    order: OrderCreateNestedOneWithoutPaymentDetailInput
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type Payment_detailUncheckedCreateInput = {
    id?: string
    amount: number
    currency: string
    time?: Date | string
    userId: string
    orderId: string
  }

  export type Payment_detailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentDetailNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type Payment_detailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type Payment_detailCreateManyInput = {
    id?: string
    amount: number
    currency: string
    time?: Date | string
    userId: string
    orderId: string
  }

  export type Payment_detailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Payment_detailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type Order_detailCreateInput = {
    id?: string
    subTotal: number
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutOrderDetailInput
    product: ProductCreateNestedOneWithoutOrderDetailInput
  }

  export type Order_detailUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    subTotal: number
    quantity: number
    price: number
  }

  export type Order_detailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type Order_detailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type Order_detailCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    subTotal: number
    quantity: number
    price: number
  }

  export type Order_detailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type Order_detailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type Track_orderCreateInput = {
    id?: string
    address: string
    status?: $Enums.Status
    order: OrderCreateNestedOneWithoutTrackOrderInput
  }

  export type Track_orderUncheckedCreateInput = {
    id?: string
    orderId: string
    address: string
    status?: $Enums.Status
  }

  export type Track_orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: OrderUpdateOneRequiredWithoutTrackOrderNestedInput
  }

  export type Track_orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Track_orderCreateManyInput = {
    id?: string
    orderId: string
    address: string
    status?: $Enums.Status
  }

  export type Track_orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Track_orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type PostCreateInput = {
    title: string
    content?: string | null
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content?: string | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type Payment_detailListRelationFilter = {
    every?: Payment_detailWhereInput
    some?: Payment_detailWhereInput
    none?: Payment_detailWhereInput
  }

  export type ProfileNullableRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Payment_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Order_detailListRelationFilter = {
    every?: Order_detailWhereInput
    some?: Order_detailWhereInput
    none?: Order_detailWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Order_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    cloudId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    cloudId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    cloudId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ReviewsUserIdProductIdCompoundUniqueInput = {
    userId: string
    productId: string
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Payment_detailNullableRelationFilter = {
    is?: Payment_detailWhereInput | null
    isNot?: Payment_detailWhereInput | null
  }

  export type Track_orderNullableRelationFilter = {
    is?: Track_orderWhereInput | null
    isNot?: Track_orderWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    total?: SortOrder
    time?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    total?: SortOrder
    time?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    total?: SortOrder
    time?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type Payment_detailCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
  }

  export type Payment_detailAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Payment_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
  }

  export type Payment_detailMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
  }

  export type Payment_detailSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Order_detailCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type Order_detailAvgOrderByAggregateInput = {
    subTotal?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type Order_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type Order_detailMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type Order_detailSumOrderByAggregateInput = {
    subTotal?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type Track_orderCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    address?: SortOrder
    status?: SortOrder
  }

  export type Track_orderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    address?: SortOrder
    status?: SortOrder
  }

  export type Track_orderMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    address?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type Payment_detailCreateNestedManyWithoutUserInput = {
    create?: XOR<Payment_detailCreateWithoutUserInput, Payment_detailUncheckedCreateWithoutUserInput> | Payment_detailCreateWithoutUserInput[] | Payment_detailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Payment_detailCreateOrConnectWithoutUserInput | Payment_detailCreateOrConnectWithoutUserInput[]
    createMany?: Payment_detailCreateManyUserInputEnvelope
    connect?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type Payment_detailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Payment_detailCreateWithoutUserInput, Payment_detailUncheckedCreateWithoutUserInput> | Payment_detailCreateWithoutUserInput[] | Payment_detailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Payment_detailCreateOrConnectWithoutUserInput | Payment_detailCreateOrConnectWithoutUserInput[]
    createMany?: Payment_detailCreateManyUserInputEnvelope
    connect?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type Payment_detailUpdateManyWithoutUserNestedInput = {
    create?: XOR<Payment_detailCreateWithoutUserInput, Payment_detailUncheckedCreateWithoutUserInput> | Payment_detailCreateWithoutUserInput[] | Payment_detailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Payment_detailCreateOrConnectWithoutUserInput | Payment_detailCreateOrConnectWithoutUserInput[]
    upsert?: Payment_detailUpsertWithWhereUniqueWithoutUserInput | Payment_detailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Payment_detailCreateManyUserInputEnvelope
    set?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
    disconnect?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
    delete?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
    connect?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
    update?: Payment_detailUpdateWithWhereUniqueWithoutUserInput | Payment_detailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Payment_detailUpdateManyWithWhereWithoutUserInput | Payment_detailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Payment_detailScalarWhereInput | Payment_detailScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type Payment_detailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Payment_detailCreateWithoutUserInput, Payment_detailUncheckedCreateWithoutUserInput> | Payment_detailCreateWithoutUserInput[] | Payment_detailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Payment_detailCreateOrConnectWithoutUserInput | Payment_detailCreateOrConnectWithoutUserInput[]
    upsert?: Payment_detailUpsertWithWhereUniqueWithoutUserInput | Payment_detailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Payment_detailCreateManyUserInputEnvelope
    set?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
    disconnect?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
    delete?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
    connect?: Payment_detailWhereUniqueInput | Payment_detailWhereUniqueInput[]
    update?: Payment_detailUpdateWithWhereUniqueWithoutUserInput | Payment_detailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Payment_detailUpdateManyWithWhereWithoutUserInput | Payment_detailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Payment_detailScalarWhereInput | Payment_detailScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type Order_detailCreateNestedManyWithoutProductInput = {
    create?: XOR<Order_detailCreateWithoutProductInput, Order_detailUncheckedCreateWithoutProductInput> | Order_detailCreateWithoutProductInput[] | Order_detailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Order_detailCreateOrConnectWithoutProductInput | Order_detailCreateOrConnectWithoutProductInput[]
    createMany?: Order_detailCreateManyProductInputEnvelope
    connect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type ReviewsCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type Order_detailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Order_detailCreateWithoutProductInput, Order_detailUncheckedCreateWithoutProductInput> | Order_detailCreateWithoutProductInput[] | Order_detailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Order_detailCreateOrConnectWithoutProductInput | Order_detailCreateOrConnectWithoutProductInput[]
    createMany?: Order_detailCreateManyProductInputEnvelope
    connect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Order_detailUpdateManyWithoutProductNestedInput = {
    create?: XOR<Order_detailCreateWithoutProductInput, Order_detailUncheckedCreateWithoutProductInput> | Order_detailCreateWithoutProductInput[] | Order_detailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Order_detailCreateOrConnectWithoutProductInput | Order_detailCreateOrConnectWithoutProductInput[]
    upsert?: Order_detailUpsertWithWhereUniqueWithoutProductInput | Order_detailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Order_detailCreateManyProductInputEnvelope
    set?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    disconnect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    delete?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    connect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    update?: Order_detailUpdateWithWhereUniqueWithoutProductInput | Order_detailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Order_detailUpdateManyWithWhereWithoutProductInput | Order_detailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Order_detailScalarWhereInput | Order_detailScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type ReviewsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutProductInput | ReviewsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutProductInput | ReviewsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutProductInput | ReviewsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Order_detailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Order_detailCreateWithoutProductInput, Order_detailUncheckedCreateWithoutProductInput> | Order_detailCreateWithoutProductInput[] | Order_detailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Order_detailCreateOrConnectWithoutProductInput | Order_detailCreateOrConnectWithoutProductInput[]
    upsert?: Order_detailUpsertWithWhereUniqueWithoutProductInput | Order_detailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Order_detailCreateManyProductInputEnvelope
    set?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    disconnect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    delete?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    connect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    update?: Order_detailUpdateWithWhereUniqueWithoutProductInput | Order_detailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Order_detailUpdateManyWithWhereWithoutProductInput | Order_detailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Order_detailScalarWhereInput | Order_detailScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutProductInput | ReviewsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutProductInput | ReviewsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutProductInput | ReviewsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewsInput, ProductUpdateWithoutReviewsInput>, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type Order_detailCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_detailCreateWithoutOrderInput, Order_detailUncheckedCreateWithoutOrderInput> | Order_detailCreateWithoutOrderInput[] | Order_detailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_detailCreateOrConnectWithoutOrderInput | Order_detailCreateOrConnectWithoutOrderInput[]
    createMany?: Order_detailCreateManyOrderInputEnvelope
    connect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
  }

  export type Payment_detailCreateNestedOneWithoutOrderInput = {
    create?: XOR<Payment_detailCreateWithoutOrderInput, Payment_detailUncheckedCreateWithoutOrderInput>
    connectOrCreate?: Payment_detailCreateOrConnectWithoutOrderInput
    connect?: Payment_detailWhereUniqueInput
  }

  export type Track_orderCreateNestedOneWithoutOrderInput = {
    create?: XOR<Track_orderCreateWithoutOrderInput, Track_orderUncheckedCreateWithoutOrderInput>
    connectOrCreate?: Track_orderCreateOrConnectWithoutOrderInput
    connect?: Track_orderWhereUniqueInput
  }

  export type Order_detailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_detailCreateWithoutOrderInput, Order_detailUncheckedCreateWithoutOrderInput> | Order_detailCreateWithoutOrderInput[] | Order_detailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_detailCreateOrConnectWithoutOrderInput | Order_detailCreateOrConnectWithoutOrderInput[]
    createMany?: Order_detailCreateManyOrderInputEnvelope
    connect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
  }

  export type Payment_detailUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<Payment_detailCreateWithoutOrderInput, Payment_detailUncheckedCreateWithoutOrderInput>
    connectOrCreate?: Payment_detailCreateOrConnectWithoutOrderInput
    connect?: Payment_detailWhereUniqueInput
  }

  export type Track_orderUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<Track_orderCreateWithoutOrderInput, Track_orderUncheckedCreateWithoutOrderInput>
    connectOrCreate?: Track_orderCreateOrConnectWithoutOrderInput
    connect?: Track_orderWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type Order_detailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_detailCreateWithoutOrderInput, Order_detailUncheckedCreateWithoutOrderInput> | Order_detailCreateWithoutOrderInput[] | Order_detailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_detailCreateOrConnectWithoutOrderInput | Order_detailCreateOrConnectWithoutOrderInput[]
    upsert?: Order_detailUpsertWithWhereUniqueWithoutOrderInput | Order_detailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_detailCreateManyOrderInputEnvelope
    set?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    disconnect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    delete?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    connect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    update?: Order_detailUpdateWithWhereUniqueWithoutOrderInput | Order_detailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_detailUpdateManyWithWhereWithoutOrderInput | Order_detailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_detailScalarWhereInput | Order_detailScalarWhereInput[]
  }

  export type Payment_detailUpdateOneWithoutOrderNestedInput = {
    create?: XOR<Payment_detailCreateWithoutOrderInput, Payment_detailUncheckedCreateWithoutOrderInput>
    connectOrCreate?: Payment_detailCreateOrConnectWithoutOrderInput
    upsert?: Payment_detailUpsertWithoutOrderInput
    disconnect?: Payment_detailWhereInput | boolean
    delete?: Payment_detailWhereInput | boolean
    connect?: Payment_detailWhereUniqueInput
    update?: XOR<XOR<Payment_detailUpdateToOneWithWhereWithoutOrderInput, Payment_detailUpdateWithoutOrderInput>, Payment_detailUncheckedUpdateWithoutOrderInput>
  }

  export type Track_orderUpdateOneWithoutOrderNestedInput = {
    create?: XOR<Track_orderCreateWithoutOrderInput, Track_orderUncheckedCreateWithoutOrderInput>
    connectOrCreate?: Track_orderCreateOrConnectWithoutOrderInput
    upsert?: Track_orderUpsertWithoutOrderInput
    disconnect?: Track_orderWhereInput | boolean
    delete?: Track_orderWhereInput | boolean
    connect?: Track_orderWhereUniqueInput
    update?: XOR<XOR<Track_orderUpdateToOneWithWhereWithoutOrderInput, Track_orderUpdateWithoutOrderInput>, Track_orderUncheckedUpdateWithoutOrderInput>
  }

  export type Order_detailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_detailCreateWithoutOrderInput, Order_detailUncheckedCreateWithoutOrderInput> | Order_detailCreateWithoutOrderInput[] | Order_detailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_detailCreateOrConnectWithoutOrderInput | Order_detailCreateOrConnectWithoutOrderInput[]
    upsert?: Order_detailUpsertWithWhereUniqueWithoutOrderInput | Order_detailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_detailCreateManyOrderInputEnvelope
    set?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    disconnect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    delete?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    connect?: Order_detailWhereUniqueInput | Order_detailWhereUniqueInput[]
    update?: Order_detailUpdateWithWhereUniqueWithoutOrderInput | Order_detailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_detailUpdateManyWithWhereWithoutOrderInput | Order_detailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_detailScalarWhereInput | Order_detailScalarWhereInput[]
  }

  export type Payment_detailUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<Payment_detailCreateWithoutOrderInput, Payment_detailUncheckedCreateWithoutOrderInput>
    connectOrCreate?: Payment_detailCreateOrConnectWithoutOrderInput
    upsert?: Payment_detailUpsertWithoutOrderInput
    disconnect?: Payment_detailWhereInput | boolean
    delete?: Payment_detailWhereInput | boolean
    connect?: Payment_detailWhereUniqueInput
    update?: XOR<XOR<Payment_detailUpdateToOneWithWhereWithoutOrderInput, Payment_detailUpdateWithoutOrderInput>, Payment_detailUncheckedUpdateWithoutOrderInput>
  }

  export type Track_orderUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<Track_orderCreateWithoutOrderInput, Track_orderUncheckedCreateWithoutOrderInput>
    connectOrCreate?: Track_orderCreateOrConnectWithoutOrderInput
    upsert?: Track_orderUpsertWithoutOrderInput
    disconnect?: Track_orderWhereInput | boolean
    delete?: Track_orderWhereInput | boolean
    connect?: Track_orderWhereUniqueInput
    update?: XOR<XOR<Track_orderUpdateToOneWithWhereWithoutOrderInput, Track_orderUpdateWithoutOrderInput>, Track_orderUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutPaymentDetailInput = {
    create?: XOR<OrderCreateWithoutPaymentDetailInput, OrderUncheckedCreateWithoutPaymentDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentDetailInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutPaymentDetailNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentDetailInput, OrderUncheckedCreateWithoutPaymentDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentDetailInput
    upsert?: OrderUpsertWithoutPaymentDetailInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentDetailInput, OrderUpdateWithoutPaymentDetailInput>, OrderUncheckedUpdateWithoutPaymentDetailInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<ProductCreateWithoutOrderDetailInput, ProductUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput
    upsert?: OrderUpsertWithoutOrderDetailInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderDetailInput, OrderUpdateWithoutOrderDetailInput>, OrderUncheckedUpdateWithoutOrderDetailInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<ProductCreateWithoutOrderDetailInput, ProductUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailInput
    upsert?: ProductUpsertWithoutOrderDetailInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderDetailInput, ProductUpdateWithoutOrderDetailInput>, ProductUncheckedUpdateWithoutOrderDetailInput>
  }

  export type OrderCreateNestedOneWithoutTrackOrderInput = {
    create?: XOR<OrderCreateWithoutTrackOrderInput, OrderUncheckedCreateWithoutTrackOrderInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTrackOrderInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type OrderUpdateOneRequiredWithoutTrackOrderNestedInput = {
    create?: XOR<OrderCreateWithoutTrackOrderInput, OrderUncheckedCreateWithoutTrackOrderInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTrackOrderInput
    upsert?: OrderUpsertWithoutTrackOrderInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutTrackOrderInput, OrderUpdateWithoutTrackOrderInput>, OrderUncheckedUpdateWithoutTrackOrderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    address: string
    total: number
    time?: Date | string
    orderDetail?: Order_detailCreateNestedManyWithoutOrderInput
    paymentDetail?: Payment_detailCreateNestedOneWithoutOrderInput
    trackOrder?: Track_orderCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    address: string
    total: number
    time?: Date | string
    orderDetail?: Order_detailUncheckedCreateNestedManyWithoutOrderInput
    paymentDetail?: Payment_detailUncheckedCreateNestedOneWithoutOrderInput
    trackOrder?: Track_orderUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Payment_detailCreateWithoutUserInput = {
    id?: string
    amount: number
    currency: string
    time?: Date | string
    order: OrderCreateNestedOneWithoutPaymentDetailInput
  }

  export type Payment_detailUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    currency: string
    time?: Date | string
    orderId: string
  }

  export type Payment_detailCreateOrConnectWithoutUserInput = {
    where: Payment_detailWhereUniqueInput
    create: XOR<Payment_detailCreateWithoutUserInput, Payment_detailUncheckedCreateWithoutUserInput>
  }

  export type Payment_detailCreateManyUserInputEnvelope = {
    data: Payment_detailCreateManyUserInput | Payment_detailCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    phone: string
    address: string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    phone: string
    address: string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateWithoutUserInput = {
    id?: string
    comment?: string | null
    rating: number
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: string
    comment?: string | null
    rating: number
    productId: string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    total?: IntFilter<"Order"> | number
    time?: DateTimeFilter<"Order"> | Date | string
  }

  export type Payment_detailUpsertWithWhereUniqueWithoutUserInput = {
    where: Payment_detailWhereUniqueInput
    update: XOR<Payment_detailUpdateWithoutUserInput, Payment_detailUncheckedUpdateWithoutUserInput>
    create: XOR<Payment_detailCreateWithoutUserInput, Payment_detailUncheckedCreateWithoutUserInput>
  }

  export type Payment_detailUpdateWithWhereUniqueWithoutUserInput = {
    where: Payment_detailWhereUniqueInput
    data: XOR<Payment_detailUpdateWithoutUserInput, Payment_detailUncheckedUpdateWithoutUserInput>
  }

  export type Payment_detailUpdateManyWithWhereWithoutUserInput = {
    where: Payment_detailScalarWhereInput
    data: XOR<Payment_detailUpdateManyMutationInput, Payment_detailUncheckedUpdateManyWithoutUserInput>
  }

  export type Payment_detailScalarWhereInput = {
    AND?: Payment_detailScalarWhereInput | Payment_detailScalarWhereInput[]
    OR?: Payment_detailScalarWhereInput[]
    NOT?: Payment_detailScalarWhereInput | Payment_detailScalarWhereInput[]
    id?: StringFilter<"Payment_detail"> | string
    amount?: IntFilter<"Payment_detail"> | number
    currency?: StringFilter<"Payment_detail"> | string
    time?: DateTimeFilter<"Payment_detail"> | Date | string
    userId?: StringFilter<"Payment_detail"> | string
    orderId?: StringFilter<"Payment_detail"> | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: StringFilter<"Reviews"> | string
    comment?: StringNullableFilter<"Reviews"> | string | null
    rating?: IntFilter<"Reviews"> | number
    userId?: StringFilter<"Reviews"> | string
    productId?: StringFilter<"Reviews"> | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    orders?: OrderCreateNestedManyWithoutUserInput
    payment?: Payment_detailCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    payment?: Payment_detailUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orders?: OrderUpdateManyWithoutUserNestedInput
    payment?: Payment_detailUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    payment?: Payment_detailUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    orderDetail?: Order_detailCreateNestedManyWithoutProductInput
    reviews?: ReviewsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    orderDetail?: Order_detailUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    price?: IntFilter<"Product"> | number
    image?: StringNullableFilter<"Product"> | string | null
    description?: StringFilter<"Product"> | string
    cloudId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringFilter<"Product"> | string
  }

  export type Order_detailCreateWithoutProductInput = {
    id?: string
    subTotal: number
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutOrderDetailInput
  }

  export type Order_detailUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    subTotal: number
    quantity: number
    price: number
  }

  export type Order_detailCreateOrConnectWithoutProductInput = {
    where: Order_detailWhereUniqueInput
    create: XOR<Order_detailCreateWithoutProductInput, Order_detailUncheckedCreateWithoutProductInput>
  }

  export type Order_detailCreateManyProductInputEnvelope = {
    data: Order_detailCreateManyProductInput | Order_detailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutProductInput = {
    id?: string
    categoryName: string
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: string
    categoryName: string
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type ReviewsCreateWithoutProductInput = {
    id?: string
    comment?: string | null
    rating: number
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutProductInput = {
    id?: string
    comment?: string | null
    rating: number
    userId: string
  }

  export type ReviewsCreateOrConnectWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput>
  }

  export type ReviewsCreateManyProductInputEnvelope = {
    data: ReviewsCreateManyProductInput | ReviewsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type Order_detailUpsertWithWhereUniqueWithoutProductInput = {
    where: Order_detailWhereUniqueInput
    update: XOR<Order_detailUpdateWithoutProductInput, Order_detailUncheckedUpdateWithoutProductInput>
    create: XOR<Order_detailCreateWithoutProductInput, Order_detailUncheckedCreateWithoutProductInput>
  }

  export type Order_detailUpdateWithWhereUniqueWithoutProductInput = {
    where: Order_detailWhereUniqueInput
    data: XOR<Order_detailUpdateWithoutProductInput, Order_detailUncheckedUpdateWithoutProductInput>
  }

  export type Order_detailUpdateManyWithWhereWithoutProductInput = {
    where: Order_detailScalarWhereInput
    data: XOR<Order_detailUpdateManyMutationInput, Order_detailUncheckedUpdateManyWithoutProductInput>
  }

  export type Order_detailScalarWhereInput = {
    AND?: Order_detailScalarWhereInput | Order_detailScalarWhereInput[]
    OR?: Order_detailScalarWhereInput[]
    NOT?: Order_detailScalarWhereInput | Order_detailScalarWhereInput[]
    id?: StringFilter<"Order_detail"> | string
    orderId?: StringFilter<"Order_detail"> | string
    productId?: StringFilter<"Order_detail"> | string
    subTotal?: IntFilter<"Order_detail"> | number
    quantity?: IntFilter<"Order_detail"> | number
    price?: IntFilter<"Order_detail"> | number
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutProductInput, ReviewsUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutProductInput, ReviewsUncheckedUpdateWithoutProductInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutProductInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutReviewsInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    orderDetail?: Order_detailCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    categoryId: string
    orderDetail?: Order_detailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    orders?: OrderCreateNestedManyWithoutUserInput
    payment?: Payment_detailCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    payment?: Payment_detailUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDetail?: Order_detailUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    orderDetail?: Order_detailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orders?: OrderUpdateManyWithoutUserNestedInput
    payment?: Payment_detailUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    payment?: Payment_detailUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    payment?: Payment_detailCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    payment?: Payment_detailUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type Order_detailCreateWithoutOrderInput = {
    id?: string
    subTotal: number
    quantity: number
    price: number
    product: ProductCreateNestedOneWithoutOrderDetailInput
  }

  export type Order_detailUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    subTotal: number
    quantity: number
    price: number
  }

  export type Order_detailCreateOrConnectWithoutOrderInput = {
    where: Order_detailWhereUniqueInput
    create: XOR<Order_detailCreateWithoutOrderInput, Order_detailUncheckedCreateWithoutOrderInput>
  }

  export type Order_detailCreateManyOrderInputEnvelope = {
    data: Order_detailCreateManyOrderInput | Order_detailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type Payment_detailCreateWithoutOrderInput = {
    id?: string
    amount: number
    currency: string
    time?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type Payment_detailUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: number
    currency: string
    time?: Date | string
    userId: string
  }

  export type Payment_detailCreateOrConnectWithoutOrderInput = {
    where: Payment_detailWhereUniqueInput
    create: XOR<Payment_detailCreateWithoutOrderInput, Payment_detailUncheckedCreateWithoutOrderInput>
  }

  export type Track_orderCreateWithoutOrderInput = {
    id?: string
    address: string
    status?: $Enums.Status
  }

  export type Track_orderUncheckedCreateWithoutOrderInput = {
    id?: string
    address: string
    status?: $Enums.Status
  }

  export type Track_orderCreateOrConnectWithoutOrderInput = {
    where: Track_orderWhereUniqueInput
    create: XOR<Track_orderCreateWithoutOrderInput, Track_orderUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    payment?: Payment_detailUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    payment?: Payment_detailUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Order_detailUpsertWithWhereUniqueWithoutOrderInput = {
    where: Order_detailWhereUniqueInput
    update: XOR<Order_detailUpdateWithoutOrderInput, Order_detailUncheckedUpdateWithoutOrderInput>
    create: XOR<Order_detailCreateWithoutOrderInput, Order_detailUncheckedCreateWithoutOrderInput>
  }

  export type Order_detailUpdateWithWhereUniqueWithoutOrderInput = {
    where: Order_detailWhereUniqueInput
    data: XOR<Order_detailUpdateWithoutOrderInput, Order_detailUncheckedUpdateWithoutOrderInput>
  }

  export type Order_detailUpdateManyWithWhereWithoutOrderInput = {
    where: Order_detailScalarWhereInput
    data: XOR<Order_detailUpdateManyMutationInput, Order_detailUncheckedUpdateManyWithoutOrderInput>
  }

  export type Payment_detailUpsertWithoutOrderInput = {
    update: XOR<Payment_detailUpdateWithoutOrderInput, Payment_detailUncheckedUpdateWithoutOrderInput>
    create: XOR<Payment_detailCreateWithoutOrderInput, Payment_detailUncheckedCreateWithoutOrderInput>
    where?: Payment_detailWhereInput
  }

  export type Payment_detailUpdateToOneWithWhereWithoutOrderInput = {
    where?: Payment_detailWhereInput
    data: XOR<Payment_detailUpdateWithoutOrderInput, Payment_detailUncheckedUpdateWithoutOrderInput>
  }

  export type Payment_detailUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type Payment_detailUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Track_orderUpsertWithoutOrderInput = {
    update: XOR<Track_orderUpdateWithoutOrderInput, Track_orderUncheckedUpdateWithoutOrderInput>
    create: XOR<Track_orderCreateWithoutOrderInput, Track_orderUncheckedCreateWithoutOrderInput>
    where?: Track_orderWhereInput
  }

  export type Track_orderUpdateToOneWithWhereWithoutOrderInput = {
    where?: Track_orderWhereInput
    data: XOR<Track_orderUpdateWithoutOrderInput, Track_orderUncheckedUpdateWithoutOrderInput>
  }

  export type Track_orderUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Track_orderUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type OrderCreateWithoutPaymentDetailInput = {
    id?: string
    address: string
    total: number
    time?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    orderDetail?: Order_detailCreateNestedManyWithoutOrderInput
    trackOrder?: Track_orderCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentDetailInput = {
    id?: string
    userId: string
    address: string
    total: number
    time?: Date | string
    orderDetail?: Order_detailUncheckedCreateNestedManyWithoutOrderInput
    trackOrder?: Track_orderUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentDetailInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentDetailInput, OrderUncheckedCreateWithoutPaymentDetailInput>
  }

  export type UserCreateWithoutPaymentInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    orders?: OrderCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentDetailInput = {
    update: XOR<OrderUpdateWithoutPaymentDetailInput, OrderUncheckedUpdateWithoutPaymentDetailInput>
    create: XOR<OrderCreateWithoutPaymentDetailInput, OrderUncheckedCreateWithoutPaymentDetailInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentDetailInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentDetailInput, OrderUncheckedUpdateWithoutPaymentDetailInput>
  }

  export type OrderUpdateWithoutPaymentDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderDetail?: Order_detailUpdateManyWithoutOrderNestedInput
    trackOrder?: Track_orderUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetail?: Order_detailUncheckedUpdateManyWithoutOrderNestedInput
    trackOrder?: Track_orderUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orders?: OrderUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateWithoutOrderDetailInput = {
    id?: string
    address: string
    total: number
    time?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    paymentDetail?: Payment_detailCreateNestedOneWithoutOrderInput
    trackOrder?: Track_orderCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderDetailInput = {
    id?: string
    userId: string
    address: string
    total: number
    time?: Date | string
    paymentDetail?: Payment_detailUncheckedCreateNestedOneWithoutOrderInput
    trackOrder?: Track_orderUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderDetailInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
  }

  export type ProductCreateWithoutOrderDetailInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    category: CategoryCreateNestedOneWithoutProductInput
    reviews?: ReviewsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderDetailInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
    categoryId: string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderDetailInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderDetailInput, ProductUncheckedCreateWithoutOrderDetailInput>
  }

  export type OrderUpsertWithoutOrderDetailInput = {
    update: XOR<OrderUpdateWithoutOrderDetailInput, OrderUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderDetailInput, OrderUncheckedUpdateWithoutOrderDetailInput>
  }

  export type OrderUpdateWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    paymentDetail?: Payment_detailUpdateOneWithoutOrderNestedInput
    trackOrder?: Track_orderUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetail?: Payment_detailUncheckedUpdateOneWithoutOrderNestedInput
    trackOrder?: Track_orderUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type ProductUpsertWithoutOrderDetailInput = {
    update: XOR<ProductUpdateWithoutOrderDetailInput, ProductUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<ProductCreateWithoutOrderDetailInput, ProductUncheckedCreateWithoutOrderDetailInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderDetailInput, ProductUncheckedUpdateWithoutOrderDetailInput>
  }

  export type ProductUpdateWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    reviews?: ReviewsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderCreateWithoutTrackOrderInput = {
    id?: string
    address: string
    total: number
    time?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    orderDetail?: Order_detailCreateNestedManyWithoutOrderInput
    paymentDetail?: Payment_detailCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTrackOrderInput = {
    id?: string
    userId: string
    address: string
    total: number
    time?: Date | string
    orderDetail?: Order_detailUncheckedCreateNestedManyWithoutOrderInput
    paymentDetail?: Payment_detailUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTrackOrderInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTrackOrderInput, OrderUncheckedCreateWithoutTrackOrderInput>
  }

  export type OrderUpsertWithoutTrackOrderInput = {
    update: XOR<OrderUpdateWithoutTrackOrderInput, OrderUncheckedUpdateWithoutTrackOrderInput>
    create: XOR<OrderCreateWithoutTrackOrderInput, OrderUncheckedCreateWithoutTrackOrderInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutTrackOrderInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutTrackOrderInput, OrderUncheckedUpdateWithoutTrackOrderInput>
  }

  export type OrderUpdateWithoutTrackOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderDetail?: Order_detailUpdateManyWithoutOrderNestedInput
    paymentDetail?: Payment_detailUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTrackOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetail?: Order_detailUncheckedUpdateManyWithoutOrderNestedInput
    paymentDetail?: Payment_detailUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    address: string
    total: number
    time?: Date | string
  }

  export type Payment_detailCreateManyUserInput = {
    id?: string
    amount: number
    currency: string
    time?: Date | string
    orderId: string
  }

  export type ReviewsCreateManyUserInput = {
    id?: string
    comment?: string | null
    rating: number
    productId: string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetail?: Order_detailUpdateManyWithoutOrderNestedInput
    paymentDetail?: Payment_detailUpdateOneWithoutOrderNestedInput
    trackOrder?: Track_orderUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetail?: Order_detailUncheckedUpdateManyWithoutOrderNestedInput
    paymentDetail?: Payment_detailUncheckedUpdateOneWithoutOrderNestedInput
    trackOrder?: Track_orderUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Payment_detailUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentDetailNestedInput
  }

  export type Payment_detailUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type Payment_detailUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    stock: number
    price: number
    image?: string | null
    description: string
    cloudId?: string | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDetail?: Order_detailUpdateManyWithoutProductNestedInput
    reviews?: ReviewsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDetail?: Order_detailUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Order_detailCreateManyProductInput = {
    id?: string
    orderId: string
    subTotal: number
    quantity: number
    price: number
  }

  export type ReviewsCreateManyProductInput = {
    id?: string
    comment?: string | null
    rating: number
    userId: string
  }

  export type Order_detailUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type Order_detailUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type Order_detailUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Order_detailCreateManyOrderInput = {
    id?: string
    productId: string
    subTotal: number
    quantity: number
    price: number
  }

  export type Order_detailUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type Order_detailUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type Order_detailUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    subTotal?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewsDefaultArgs instead
     */
    export type ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Payment_detailDefaultArgs instead
     */
    export type Payment_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Payment_detailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Order_detailDefaultArgs instead
     */
    export type Order_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Order_detailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Track_orderDefaultArgs instead
     */
    export type Track_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Track_orderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}