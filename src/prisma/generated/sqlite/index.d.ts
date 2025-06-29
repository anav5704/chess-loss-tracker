
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
 * Model Opening
 * 
 */
export type Opening = $Result.DefaultSelection<Prisma.$OpeningPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Openings
 * const openings = await prisma.opening.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Openings
   * const openings = await prisma.opening.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.opening`: Exposes CRUD operations for the **Opening** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Openings
    * const openings = await prisma.opening.findMany()
    * ```
    */
  get opening(): Prisma.OpeningDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Opening: 'Opening'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "opening"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Opening: {
        payload: Prisma.$OpeningPayload<ExtArgs>
        fields: Prisma.OpeningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpeningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpeningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>
          }
          findFirst: {
            args: Prisma.OpeningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpeningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>
          }
          findMany: {
            args: Prisma.OpeningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>[]
          }
          create: {
            args: Prisma.OpeningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>
          }
          createMany: {
            args: Prisma.OpeningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpeningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>[]
          }
          delete: {
            args: Prisma.OpeningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>
          }
          update: {
            args: Prisma.OpeningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>
          }
          deleteMany: {
            args: Prisma.OpeningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpeningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpeningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>[]
          }
          upsert: {
            args: Prisma.OpeningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningPayload>
          }
          aggregate: {
            args: Prisma.OpeningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpening>
          }
          groupBy: {
            args: Prisma.OpeningGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpeningGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpeningCountArgs<ExtArgs>
            result: $Utils.Optional<OpeningCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    opening?: OpeningOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Opening
   */

  export type AggregateOpening = {
    _count: OpeningCountAggregateOutputType | null
    _avg: OpeningAvgAggregateOutputType | null
    _sum: OpeningSumAggregateOutputType | null
    _min: OpeningMinAggregateOutputType | null
    _max: OpeningMaxAggregateOutputType | null
  }

  export type OpeningAvgAggregateOutputType = {
    id: number | null
  }

  export type OpeningSumAggregateOutputType = {
    id: number | null
  }

  export type OpeningMinAggregateOutputType = {
    id: number | null
    eco: string | null
    name: string | null
    pgn: string | null
    fen: string | null
  }

  export type OpeningMaxAggregateOutputType = {
    id: number | null
    eco: string | null
    name: string | null
    pgn: string | null
    fen: string | null
  }

  export type OpeningCountAggregateOutputType = {
    id: number
    eco: number
    name: number
    pgn: number
    fen: number
    _all: number
  }


  export type OpeningAvgAggregateInputType = {
    id?: true
  }

  export type OpeningSumAggregateInputType = {
    id?: true
  }

  export type OpeningMinAggregateInputType = {
    id?: true
    eco?: true
    name?: true
    pgn?: true
    fen?: true
  }

  export type OpeningMaxAggregateInputType = {
    id?: true
    eco?: true
    name?: true
    pgn?: true
    fen?: true
  }

  export type OpeningCountAggregateInputType = {
    id?: true
    eco?: true
    name?: true
    pgn?: true
    fen?: true
    _all?: true
  }

  export type OpeningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opening to aggregate.
     */
    where?: OpeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Openings to fetch.
     */
    orderBy?: OpeningOrderByWithRelationInput | OpeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Openings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Openings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Openings
    **/
    _count?: true | OpeningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpeningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpeningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpeningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpeningMaxAggregateInputType
  }

  export type GetOpeningAggregateType<T extends OpeningAggregateArgs> = {
        [P in keyof T & keyof AggregateOpening]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpening[P]>
      : GetScalarType<T[P], AggregateOpening[P]>
  }




  export type OpeningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpeningWhereInput
    orderBy?: OpeningOrderByWithAggregationInput | OpeningOrderByWithAggregationInput[]
    by: OpeningScalarFieldEnum[] | OpeningScalarFieldEnum
    having?: OpeningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpeningCountAggregateInputType | true
    _avg?: OpeningAvgAggregateInputType
    _sum?: OpeningSumAggregateInputType
    _min?: OpeningMinAggregateInputType
    _max?: OpeningMaxAggregateInputType
  }

  export type OpeningGroupByOutputType = {
    id: number
    eco: string
    name: string
    pgn: string
    fen: string
    _count: OpeningCountAggregateOutputType | null
    _avg: OpeningAvgAggregateOutputType | null
    _sum: OpeningSumAggregateOutputType | null
    _min: OpeningMinAggregateOutputType | null
    _max: OpeningMaxAggregateOutputType | null
  }

  type GetOpeningGroupByPayload<T extends OpeningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpeningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpeningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpeningGroupByOutputType[P]>
            : GetScalarType<T[P], OpeningGroupByOutputType[P]>
        }
      >
    >


  export type OpeningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eco?: boolean
    name?: boolean
    pgn?: boolean
    fen?: boolean
  }, ExtArgs["result"]["opening"]>

  export type OpeningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eco?: boolean
    name?: boolean
    pgn?: boolean
    fen?: boolean
  }, ExtArgs["result"]["opening"]>

  export type OpeningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eco?: boolean
    name?: boolean
    pgn?: boolean
    fen?: boolean
  }, ExtArgs["result"]["opening"]>

  export type OpeningSelectScalar = {
    id?: boolean
    eco?: boolean
    name?: boolean
    pgn?: boolean
    fen?: boolean
  }

  export type OpeningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eco" | "name" | "pgn" | "fen", ExtArgs["result"]["opening"]>

  export type $OpeningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opening"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eco: string
      name: string
      pgn: string
      fen: string
    }, ExtArgs["result"]["opening"]>
    composites: {}
  }

  type OpeningGetPayload<S extends boolean | null | undefined | OpeningDefaultArgs> = $Result.GetResult<Prisma.$OpeningPayload, S>

  type OpeningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpeningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpeningCountAggregateInputType | true
    }

  export interface OpeningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opening'], meta: { name: 'Opening' } }
    /**
     * Find zero or one Opening that matches the filter.
     * @param {OpeningFindUniqueArgs} args - Arguments to find a Opening
     * @example
     * // Get one Opening
     * const opening = await prisma.opening.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpeningFindUniqueArgs>(args: SelectSubset<T, OpeningFindUniqueArgs<ExtArgs>>): Prisma__OpeningClient<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opening that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpeningFindUniqueOrThrowArgs} args - Arguments to find a Opening
     * @example
     * // Get one Opening
     * const opening = await prisma.opening.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpeningFindUniqueOrThrowArgs>(args: SelectSubset<T, OpeningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpeningClient<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opening that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningFindFirstArgs} args - Arguments to find a Opening
     * @example
     * // Get one Opening
     * const opening = await prisma.opening.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpeningFindFirstArgs>(args?: SelectSubset<T, OpeningFindFirstArgs<ExtArgs>>): Prisma__OpeningClient<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opening that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningFindFirstOrThrowArgs} args - Arguments to find a Opening
     * @example
     * // Get one Opening
     * const opening = await prisma.opening.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpeningFindFirstOrThrowArgs>(args?: SelectSubset<T, OpeningFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpeningClient<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Openings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Openings
     * const openings = await prisma.opening.findMany()
     * 
     * // Get first 10 Openings
     * const openings = await prisma.opening.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openingWithIdOnly = await prisma.opening.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpeningFindManyArgs>(args?: SelectSubset<T, OpeningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opening.
     * @param {OpeningCreateArgs} args - Arguments to create a Opening.
     * @example
     * // Create one Opening
     * const Opening = await prisma.opening.create({
     *   data: {
     *     // ... data to create a Opening
     *   }
     * })
     * 
     */
    create<T extends OpeningCreateArgs>(args: SelectSubset<T, OpeningCreateArgs<ExtArgs>>): Prisma__OpeningClient<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Openings.
     * @param {OpeningCreateManyArgs} args - Arguments to create many Openings.
     * @example
     * // Create many Openings
     * const opening = await prisma.opening.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpeningCreateManyArgs>(args?: SelectSubset<T, OpeningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Openings and returns the data saved in the database.
     * @param {OpeningCreateManyAndReturnArgs} args - Arguments to create many Openings.
     * @example
     * // Create many Openings
     * const opening = await prisma.opening.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Openings and only return the `id`
     * const openingWithIdOnly = await prisma.opening.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpeningCreateManyAndReturnArgs>(args?: SelectSubset<T, OpeningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opening.
     * @param {OpeningDeleteArgs} args - Arguments to delete one Opening.
     * @example
     * // Delete one Opening
     * const Opening = await prisma.opening.delete({
     *   where: {
     *     // ... filter to delete one Opening
     *   }
     * })
     * 
     */
    delete<T extends OpeningDeleteArgs>(args: SelectSubset<T, OpeningDeleteArgs<ExtArgs>>): Prisma__OpeningClient<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opening.
     * @param {OpeningUpdateArgs} args - Arguments to update one Opening.
     * @example
     * // Update one Opening
     * const opening = await prisma.opening.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpeningUpdateArgs>(args: SelectSubset<T, OpeningUpdateArgs<ExtArgs>>): Prisma__OpeningClient<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Openings.
     * @param {OpeningDeleteManyArgs} args - Arguments to filter Openings to delete.
     * @example
     * // Delete a few Openings
     * const { count } = await prisma.opening.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpeningDeleteManyArgs>(args?: SelectSubset<T, OpeningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Openings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Openings
     * const opening = await prisma.opening.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpeningUpdateManyArgs>(args: SelectSubset<T, OpeningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Openings and returns the data updated in the database.
     * @param {OpeningUpdateManyAndReturnArgs} args - Arguments to update many Openings.
     * @example
     * // Update many Openings
     * const opening = await prisma.opening.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Openings and only return the `id`
     * const openingWithIdOnly = await prisma.opening.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpeningUpdateManyAndReturnArgs>(args: SelectSubset<T, OpeningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opening.
     * @param {OpeningUpsertArgs} args - Arguments to update or create a Opening.
     * @example
     * // Update or create a Opening
     * const opening = await prisma.opening.upsert({
     *   create: {
     *     // ... data to create a Opening
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opening we want to update
     *   }
     * })
     */
    upsert<T extends OpeningUpsertArgs>(args: SelectSubset<T, OpeningUpsertArgs<ExtArgs>>): Prisma__OpeningClient<$Result.GetResult<Prisma.$OpeningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Openings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningCountArgs} args - Arguments to filter Openings to count.
     * @example
     * // Count the number of Openings
     * const count = await prisma.opening.count({
     *   where: {
     *     // ... the filter for the Openings we want to count
     *   }
     * })
    **/
    count<T extends OpeningCountArgs>(
      args?: Subset<T, OpeningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpeningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpeningAggregateArgs>(args: Subset<T, OpeningAggregateArgs>): Prisma.PrismaPromise<GetOpeningAggregateType<T>>

    /**
     * Group by Opening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningGroupByArgs} args - Group by arguments.
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
      T extends OpeningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpeningGroupByArgs['orderBy'] }
        : { orderBy?: OpeningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpeningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpeningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opening model
   */
  readonly fields: OpeningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opening.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpeningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Opening model
   */
  interface OpeningFieldRefs {
    readonly id: FieldRef<"Opening", 'Int'>
    readonly eco: FieldRef<"Opening", 'String'>
    readonly name: FieldRef<"Opening", 'String'>
    readonly pgn: FieldRef<"Opening", 'String'>
    readonly fen: FieldRef<"Opening", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Opening findUnique
   */
  export type OpeningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * Filter, which Opening to fetch.
     */
    where: OpeningWhereUniqueInput
  }

  /**
   * Opening findUniqueOrThrow
   */
  export type OpeningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * Filter, which Opening to fetch.
     */
    where: OpeningWhereUniqueInput
  }

  /**
   * Opening findFirst
   */
  export type OpeningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * Filter, which Opening to fetch.
     */
    where?: OpeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Openings to fetch.
     */
    orderBy?: OpeningOrderByWithRelationInput | OpeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Openings.
     */
    cursor?: OpeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Openings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Openings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Openings.
     */
    distinct?: OpeningScalarFieldEnum | OpeningScalarFieldEnum[]
  }

  /**
   * Opening findFirstOrThrow
   */
  export type OpeningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * Filter, which Opening to fetch.
     */
    where?: OpeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Openings to fetch.
     */
    orderBy?: OpeningOrderByWithRelationInput | OpeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Openings.
     */
    cursor?: OpeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Openings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Openings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Openings.
     */
    distinct?: OpeningScalarFieldEnum | OpeningScalarFieldEnum[]
  }

  /**
   * Opening findMany
   */
  export type OpeningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * Filter, which Openings to fetch.
     */
    where?: OpeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Openings to fetch.
     */
    orderBy?: OpeningOrderByWithRelationInput | OpeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Openings.
     */
    cursor?: OpeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Openings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Openings.
     */
    skip?: number
    distinct?: OpeningScalarFieldEnum | OpeningScalarFieldEnum[]
  }

  /**
   * Opening create
   */
  export type OpeningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * The data needed to create a Opening.
     */
    data: XOR<OpeningCreateInput, OpeningUncheckedCreateInput>
  }

  /**
   * Opening createMany
   */
  export type OpeningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Openings.
     */
    data: OpeningCreateManyInput | OpeningCreateManyInput[]
  }

  /**
   * Opening createManyAndReturn
   */
  export type OpeningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * The data used to create many Openings.
     */
    data: OpeningCreateManyInput | OpeningCreateManyInput[]
  }

  /**
   * Opening update
   */
  export type OpeningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * The data needed to update a Opening.
     */
    data: XOR<OpeningUpdateInput, OpeningUncheckedUpdateInput>
    /**
     * Choose, which Opening to update.
     */
    where: OpeningWhereUniqueInput
  }

  /**
   * Opening updateMany
   */
  export type OpeningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Openings.
     */
    data: XOR<OpeningUpdateManyMutationInput, OpeningUncheckedUpdateManyInput>
    /**
     * Filter which Openings to update
     */
    where?: OpeningWhereInput
    /**
     * Limit how many Openings to update.
     */
    limit?: number
  }

  /**
   * Opening updateManyAndReturn
   */
  export type OpeningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * The data used to update Openings.
     */
    data: XOR<OpeningUpdateManyMutationInput, OpeningUncheckedUpdateManyInput>
    /**
     * Filter which Openings to update
     */
    where?: OpeningWhereInput
    /**
     * Limit how many Openings to update.
     */
    limit?: number
  }

  /**
   * Opening upsert
   */
  export type OpeningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * The filter to search for the Opening to update in case it exists.
     */
    where: OpeningWhereUniqueInput
    /**
     * In case the Opening found by the `where` argument doesn't exist, create a new Opening with this data.
     */
    create: XOR<OpeningCreateInput, OpeningUncheckedCreateInput>
    /**
     * In case the Opening was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpeningUpdateInput, OpeningUncheckedUpdateInput>
  }

  /**
   * Opening delete
   */
  export type OpeningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
    /**
     * Filter which Opening to delete.
     */
    where: OpeningWhereUniqueInput
  }

  /**
   * Opening deleteMany
   */
  export type OpeningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Openings to delete
     */
    where?: OpeningWhereInput
    /**
     * Limit how many Openings to delete.
     */
    limit?: number
  }

  /**
   * Opening without action
   */
  export type OpeningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opening
     */
    select?: OpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opening
     */
    omit?: OpeningOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OpeningScalarFieldEnum: {
    id: 'id',
    eco: 'eco',
    name: 'name',
    pgn: 'pgn',
    fen: 'fen'
  };

  export type OpeningScalarFieldEnum = (typeof OpeningScalarFieldEnum)[keyof typeof OpeningScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OpeningWhereInput = {
    AND?: OpeningWhereInput | OpeningWhereInput[]
    OR?: OpeningWhereInput[]
    NOT?: OpeningWhereInput | OpeningWhereInput[]
    id?: IntFilter<"Opening"> | number
    eco?: StringFilter<"Opening"> | string
    name?: StringFilter<"Opening"> | string
    pgn?: StringFilter<"Opening"> | string
    fen?: StringFilter<"Opening"> | string
  }

  export type OpeningOrderByWithRelationInput = {
    id?: SortOrder
    eco?: SortOrder
    name?: SortOrder
    pgn?: SortOrder
    fen?: SortOrder
  }

  export type OpeningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OpeningWhereInput | OpeningWhereInput[]
    OR?: OpeningWhereInput[]
    NOT?: OpeningWhereInput | OpeningWhereInput[]
    eco?: StringFilter<"Opening"> | string
    name?: StringFilter<"Opening"> | string
    pgn?: StringFilter<"Opening"> | string
    fen?: StringFilter<"Opening"> | string
  }, "id">

  export type OpeningOrderByWithAggregationInput = {
    id?: SortOrder
    eco?: SortOrder
    name?: SortOrder
    pgn?: SortOrder
    fen?: SortOrder
    _count?: OpeningCountOrderByAggregateInput
    _avg?: OpeningAvgOrderByAggregateInput
    _max?: OpeningMaxOrderByAggregateInput
    _min?: OpeningMinOrderByAggregateInput
    _sum?: OpeningSumOrderByAggregateInput
  }

  export type OpeningScalarWhereWithAggregatesInput = {
    AND?: OpeningScalarWhereWithAggregatesInput | OpeningScalarWhereWithAggregatesInput[]
    OR?: OpeningScalarWhereWithAggregatesInput[]
    NOT?: OpeningScalarWhereWithAggregatesInput | OpeningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Opening"> | number
    eco?: StringWithAggregatesFilter<"Opening"> | string
    name?: StringWithAggregatesFilter<"Opening"> | string
    pgn?: StringWithAggregatesFilter<"Opening"> | string
    fen?: StringWithAggregatesFilter<"Opening"> | string
  }

  export type OpeningCreateInput = {
    eco: string
    name: string
    pgn: string
    fen: string
  }

  export type OpeningUncheckedCreateInput = {
    id?: number
    eco: string
    name: string
    pgn: string
    fen: string
  }

  export type OpeningUpdateInput = {
    eco?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pgn?: StringFieldUpdateOperationsInput | string
    fen?: StringFieldUpdateOperationsInput | string
  }

  export type OpeningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eco?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pgn?: StringFieldUpdateOperationsInput | string
    fen?: StringFieldUpdateOperationsInput | string
  }

  export type OpeningCreateManyInput = {
    id?: number
    eco: string
    name: string
    pgn: string
    fen: string
  }

  export type OpeningUpdateManyMutationInput = {
    eco?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pgn?: StringFieldUpdateOperationsInput | string
    fen?: StringFieldUpdateOperationsInput | string
  }

  export type OpeningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eco?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pgn?: StringFieldUpdateOperationsInput | string
    fen?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type OpeningCountOrderByAggregateInput = {
    id?: SortOrder
    eco?: SortOrder
    name?: SortOrder
    pgn?: SortOrder
    fen?: SortOrder
  }

  export type OpeningAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OpeningMaxOrderByAggregateInput = {
    id?: SortOrder
    eco?: SortOrder
    name?: SortOrder
    pgn?: SortOrder
    fen?: SortOrder
  }

  export type OpeningMinOrderByAggregateInput = {
    id?: SortOrder
    eco?: SortOrder
    name?: SortOrder
    pgn?: SortOrder
    fen?: SortOrder
  }

  export type OpeningSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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