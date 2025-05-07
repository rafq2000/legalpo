export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      alert_configs: {
        Row: {
          alert_type: string
          created_at: string | null
          id: string
          is_active: boolean | null
          notification_email: string | null
          threshold: number
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          notification_email?: string | null
          threshold: number
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          notification_email?: string | null
          threshold?: number
        }
        Relationships: []
      }
      alert_history: {
        Row: {
          alert_config_id: string | null
          id: string
          message: string | null
          triggered_at: string | null
          value: number | null
        }
        Insert: {
          alert_config_id?: string | null
          id?: string
          message?: string | null
          triggered_at?: string | null
          value?: number | null
        }
        Update: {
          alert_config_id?: string | null
          id?: string
          message?: string | null
          triggered_at?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "alert_history_alert_config_id_fkey"
            columns: ["alert_config_id"]
            referencedRelation: "alert_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      daily_count: {
        Row: {
          count: number
          date: string
          id: number
        }
        Insert: {
          count?: number
          date: string
          id?: never
        }
        Update: {
          count?: number
          date?: string
          id?: never
        }
        Relationships: []
      }
      daily_stats: {
        Row: {
          active_users: number | null
          avg_session_duration: number | null
          date: string
          new_users: number | null
          page_views: Json | null
          total_sessions: number | null
          total_users: number | null
        }
        Insert: {
          active_users?: number | null
          avg_session_duration?: number | null
          date: string
          new_users?: number | null
          page_views?: Json | null
          total_sessions?: number | null
          total_users?: number | null
        }
        Update: {
          active_users?: number | null
          avg_session_duration?: number | null
          date?: string
          new_users?: number | null
          page_views?: Json | null
          total_sessions?: number | null
          total_users?: number | null
        }
        Relationships: []
      }
      user_events: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          metadata: Json | null
          page_path: string | null
          session_id: string | null
          user_id: string
        }
        Insert: {
          event_type: string
          id?: string
          metadata?: Json | null
          page_path?: string | null
          session_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          page_path?: string | null
          session_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          duration_seconds: number | null
          ended_at: string | null
          id: string
          is_active: boolean | null
          started_at: string | null
          user_id: string
        }
        Insert: {
          duration_seconds?: number | null
          ended_at?: string | null
          id: string
          is_active?: boolean | null
          started_at?: string | null
          user_id: string
        }
        Update: {
          duration_seconds?: number | null
          ended_at?: string | null
          id?: string
          is_active?: boolean | null
          started_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      waiting_list: {
        Row: {
          email: string
          id: number
          request_time: string | null
        }
        Insert: {
          email: string
          id?: never
          request_time?: string | null
        }
        Update: {
          email?: string
          id?: never
          request_time?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_\
