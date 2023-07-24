import { AxiosError } from "axios"

interface IRequest<TPayload, TResponse> {
  action(_payload?: TPayload): Promise<TResponse>;
  loader?(_status: boolean): void;
  resolve?(_response: TResponse): void;
  reject?(_e: AxiosError): void;
  payload?: TPayload;
}

export async function requestUtil<TPayload, TResponse> ({
  action,
  loader,
  resolve,
  reject,
  payload,
}: IRequest<TPayload, TResponse>): Promise<void> {
  try {
    loader?.(true)
    let response: TResponse

    if (!payload) {
      response = await action()
    } else {
      response = await action({ ...payload })
    }

    resolve?.(response)
  } catch (e) {
    const err = e as AxiosError

    if (!reject && err.response?.status !== 422) {
      console.error("error", err)
    }

    reject?.(err)
  } finally {
    loader?.(false)
  }
}
