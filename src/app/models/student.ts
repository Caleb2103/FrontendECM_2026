export interface Zone {
  zone_id: number;
  zone_name: string;
}

export interface Member {
  memb_id: number;
  memb_dni: string;
  memb_typedni: string;
  memb_name: string;
  memb_surname: string;
  memb_mobil: string;
  birthdate: string;
  memb_zone: Zone;
}

export interface Schedule {
  sche_id: number;
  sche_description: string;
  sche_day: number;
  sche_starttime: string;
  sche_endtime: string;
}

export interface Mode {
  mode_id: number;
  mode_name: string;
}

export interface Course {
  cour_id: number;
  cour_description: string;
  cour_material: string;
  alterno: string;
  cour_level: number;
  cour_status: boolean;
  cour_type: string;
}

export interface Period {
  peri_id: number;
  peri_description: string;
  peri_start: string;
  peri_end: string;
  peri_status: boolean;
}

export interface Season {
  seas_id: number;
  seas_status: boolean;
  seas_glosa: string;
  seas_period: Period;
  seas_course: Course;
  seas_schedule: Schedule;
  seas_mode: Mode;
  seas_teacher: Member;
}

export interface Student {
  stud_id: number;
  stud_member: Member;
  stud_season: Season;
  seas_final: number;
  seas_ses01: boolean;
  seas_ses02: boolean;
  seas_ses03: boolean;
  seas_ses04: boolean;
  seas_ses05: boolean;
  seas_ses06: boolean;
  seas_ses07: boolean;
  seas_ses08: boolean;
  seas_ses09: boolean;
  seas_ses10: boolean;
  seas_ses11: boolean;
  seas_ses12: boolean;
}

export interface Voucher {
  vouc_id: number;
  vouc_image_url: string;
  vouc_image_name: string;
  vouc_image_type: string;
  vouc_operation_number: string;
  vouc_status: string;
  vouc_created_at: string;
  vouc_updated_at: string;
  vouc_comment: string;
  vouc_member: Member;
  vouc_period: Period;
}

export interface VoucherCreate {
  vouc_operation_number: string;
  vouc_image: string;
  vouc_member: number;
  vouc_period: number;
}
