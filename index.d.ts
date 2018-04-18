declare namespace jspmTscUpdate {
  interface IUpdateTscUpdateOptions {
     silent?: boolean;
     packagePath?: string;
     tsConfigName?: string;
     tsConfigOutName?: string;
     tsConfigPath?: string;
     tsConfigOutPath?: string;
     jspm?: object,
     baseUrl?: string;
     ignoreLibDirectory?: boolean;
     noBackupTsConfig?: boolean;
     noBackupWarning?: boolean;
     backupOverwrite?: boolean;
     backupPrefix?: string;
     backupSuffix?: string;
 }
}

declare function jspmTscUpdate(options: jspmTscUpdate.IUpdateTscUpdateOptions): boolean;

export = jspmTscUpdate;
