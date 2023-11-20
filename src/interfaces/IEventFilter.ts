export type IFilterStatus = "Completos" | "Incompletos" | "Ambos";

export interface IEventFilter {
  data?: Date | null
  status: IFilterStatus
}