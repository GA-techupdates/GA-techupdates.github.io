# Error Codes Reference Notes

## HTTP Status Codes

### 1xx - Informational Responses

**100 Continue**
- Server has received request headers and client should proceed with sending body

**101 Switching Protocols** 
- Server is switching protocols as requested by client

**102 Processing**
- Server has received and is processing the request

**103 Early Hints**
- Used to return some response headers before final HTTP message

### 2xx - Success Responses

**200 OK**
- Standard success response

**201 Created**
- Request fulfilled, new resource created

**202 Accepted**
- Request accepted but processing not complete

**203 Non-Authoritative Information**
- Returned meta-information not from origin server

**204 No Content**
- Success but no content to return

**205 Reset Content**
- Client should reset document view

**206 Partial Content**
- Server delivering partial content (range requests)

**207 Multi-Status**
- Multiple status codes for different parts of request

**208 Already Reported**
- DAV binding members already enumerated

**226 IM Used**
- Server has fulfilled GET request for resource

### 3xx - Redirection Responses

**300 Multiple Choices**
- Multiple options for the resource

**301 Moved Permanently**
- Permanent redirect to new URL

**302 Found**
- Temporary redirect to different URI

**303 See Other**
- Response can be found under different URI

**304 Not Modified**
- Resource not modified since last request

**305 Use Proxy**
- Request must be accessed through proxy

**307 Temporary Redirect**
- Temporary redirect preserving HTTP method

**308 Permanent Redirect**
- Permanent redirect preserving HTTP method

### 4xx - Client Error Responses

**400 Bad Request**
- Server cannot process due to client error

**401 Unauthorized**
- Authentication required or failed

**402 Payment Required**
- Reserved for future use

**403 Forbidden**
- Server understands but refuses to authorize

**404 Not Found**
- Resource not found on server

**405 Method Not Allowed**
- HTTP method not supported for this resource

**406 Not Acceptable**
- Server cannot produce response matching accept-headers

**407 Proxy Authentication Required**
- Client must authenticate with proxy

**408 Request Timeout**
- Server timed out waiting for request

**409 Conflict**
- Request conflicts with current server state

**410 Gone**
- Resource gone and will not be available again

**411 Length Required**
- Server requires Content-Length header

**412 Precondition Failed**
- Client header preconditions not met

**413 Payload Too Large**
- Request entity larger than server limits

**414 URI Too Long**
- Request URI longer than server can interpret

**415 Unsupported Media Type**
- Media format not supported by server

**416 Range Not Satisfiable**
- Cannot serve requested portion of resource

**417 Expectation Failed**
- Server cannot meet Expect request-header field

**418 I'm a teapot**
- April Fools' joke code

**421 Misdirected Request**
- Request directed at server unable to produce response

**422 Unprocessable Entity**
- Request well-formed but contains semantic errors

**423 Locked**
- Resource accessed is locked

**424 Failed Dependency**
- Request failed due to failure of previous request

**425 Too Early**
- Server unwilling to process request that might be replayed

**426 Upgrade Required**
- Client should switch to different protocol

**428 Precondition Required**
- Origin server requires conditional request

**429 Too Many Requests**
- User sent too many requests in given time

**431 Request Header Fields Too Large**
- Header fields too large for server to process

**451 Unavailable For Legal Reasons**
- Resource unavailable due to legal demands

### 5xx - Server Error Responses

**500 Internal Server Error**
- Generic server error message

**501 Not Implemented**
- Server lacks ability to fulfill request

**502 Bad Gateway**
- Invalid response from upstream server

**503 Service Unavailable**
- Server temporarily unable to handle request

**504 Gateway Timeout**
- Upstream server failed to respond in time

**505 HTTP Version Not Supported**
- Server doesn't support HTTP version

**506 Variant Also Negotiates**
- Transparent content negotiation for request results in circular reference

**507 Insufficient Storage**
- Server unable to store representation needed to complete request

**508 Loop Detected**
- Server detected infinite loop while processing request

**510 Not Extended**
- Further extensions to request are required

**511 Network Authentication Required**
- Client needs to authenticate to gain network access

## Common System Error Codes

### Windows System Errors

**ERROR_SUCCESS (0)**
- Operation completed successfully

**ERROR_INVALID_FUNCTION (1)**
- Incorrect function

**ERROR_FILE_NOT_FOUND (2)**
- System cannot find the file specified

**ERROR_PATH_NOT_FOUND (3)**
- System cannot find the path specified

**ERROR_TOO_MANY_OPEN_FILES (4)**
- System cannot open the file

**ERROR_ACCESS_DENIED (5)**
- Access is denied

**ERROR_INVALID_HANDLE (6)**
- Handle is invalid

**ERROR_ARENA_TRASHED (7)**
- Storage control blocks destroyed

**ERROR_NOT_ENOUGH_MEMORY (8)**
- Not enough storage available

**ERROR_INVALID_BLOCK (9)**
- Storage control block address invalid

**ERROR_BAD_ENVIRONMENT (10)**
- Environment is incorrect

**ERROR_BAD_FORMAT (11)**
- Attempt to load program with incorrect format

**ERROR_INVALID_ACCESS (12)**
- Access code invalid

**ERROR_INVALID_DATA (13)**
- Data is invalid

**ERROR_OUTOFMEMORY (14)**
- Not enough storage available

**ERROR_INVALID_DRIVE (15)**
- Cannot find the drive specified

**ERROR_CURRENT_DIRECTORY (16)**
- Cannot remove current directory

**ERROR_NOT_SAME_DEVICE (17)**
- System cannot move file to different disk drive

**ERROR_NO_MORE_FILES (18)**
- There are no more files

**ERROR_WRITE_PROTECT (19)**
- Media is write protected

**ERROR_BAD_UNIT (20)**
- System cannot find the device specified

**ERROR_NOT_READY (21)**
- Device is not ready

**ERROR_BAD_COMMAND (22)**
- Device does not recognize the command

**ERROR_CRC (23)**
- Data error (cyclic redundancy check)

**ERROR_BAD_LENGTH (24)**
- Program issued command with incorrect length

**ERROR_SEEK (25)**
- Drive cannot locate specific area or track

**ERROR_NOT_DOS_DISK (26)**
- Cannot access specified disk or floppy

**ERROR_SECTOR_NOT_FOUND (27)**
- Drive cannot find sector requested

**ERROR_OUT_OF_PAPER (28)**
- Printer out of paper

**ERROR_WRITE_FAULT (29)**
- System cannot write to specified device

**ERROR_READ_FAULT (30)**
- System cannot read from specified device

**ERROR_GEN_FAILURE (31)**
- Device attached to system not functioning

**ERROR_SHARING_VIOLATION (32)**
- Process cannot access file being used by another process

**ERROR_LOCK_VIOLATION (33)**
- Process cannot access file due to another process lock

**ERROR_WRONG_DISK (34)**
- Wrong disk in drive

**ERROR_SHARING_BUFFER_EXCEEDED (36)**
- Too many files opened for sharing

**ERROR_HANDLE_EOF (38)**
- Reached end of file

**ERROR_HANDLE_DISK_FULL (39)**
- Disk is full

**ERROR_NOT_SUPPORTED (50)**
- Network request not supported

**ERROR_REM_NOT_LIST (51)**
- Remote computer not listening

**ERROR_DUP_NAME (52)**
- Duplicate name on network

**ERROR_BAD_NETPATH (53)**
- Network path not found

**ERROR_NETWORK_BUSY (54)**
- Network is busy

**ERROR_DEV_NOT_EXIST (55)**
- Network device no longer exists

**ERROR_TOO_MANY_CMDS (56)**
- Network BIOS command limit reached

**ERROR_ADAP_HDW_ERR (57)**
- Network adapter hardware error

**ERROR_BAD_NET_RESP (58)**
- Incorrect response from network

**ERROR_UNEXP_NET_ERR (59)**
- Unexpected network error

**ERROR_BAD_REM_ADAP (60)**
- Remote adapter incompatible

**ERROR_PRINTQ_FULL (61)**
- Printer queue full

**ERROR_NO_SPOOL_SPACE (62)**
- Space to store file waiting to print not available

**ERROR_PRINT_CANCELLED (63)**
- File waiting to print deleted

**ERROR_NETNAME_DELETED (64)**
- Network name deleted

**ERROR_NETWORK_ACCESS_DENIED (65)**
- Network access denied

**ERROR_BAD_DEV_TYPE (66)**
- Network resource type incorrect

**ERROR_BAD_NET_NAME (67)**
- Network name cannot be found

**ERROR_TOO_MANY_NAMES (68)**
- Network name limit exceeded

**ERROR_TOO_MANY_SESS (69)**
- Network BIOS session limit exceeded

**ERROR_SHARING_PAUSED (70)**
- Remote server paused or in progress of starting

**ERROR_REQ_NOT_ACCEP (71)**
- Network request not accepted

**ERROR_REDIR_PAUSED (72)**
- Printer or disk redirection paused

**ERROR_FILE_EXISTS (80)**
- File exists

**ERROR_CANNOT_MAKE (82)**
- Cannot create directory or file

**ERROR_FAIL_I24 (83)**
- Fail on INT 24

**ERROR_OUT_OF_STRUCTURES (84)**
- Storage to process request not available

**ERROR_ALREADY_ASSIGNED (85)**
- Local device name already in use

**ERROR_INVALID_PASSWORD (86)**
- Network password incorrect

**ERROR_INVALID_PARAMETER (87)**
- Parameter incorrect

**ERROR_NET_WRITE_FAULT (88)**
- Network data fault

**ERROR_NO_PROC_SLOTS (89)**
- No process slots available

**ERROR_TOO_MANY_SEMAPHORES (100)**
- Cannot create another system semaphore

**ERROR_EXCL_SEM_ALREADY_OWNED (101)**
- Exclusive semaphore owned by another process

**ERROR_SEM_IS_SET (102)**
- Semaphore set and cannot be closed

**ERROR_TOO_MANY_SEM_REQUESTS (103)**
- Semaphore cannot be set again

**ERROR_INVALID_AT_INTERRUPT_TIME (104)**
- Cannot request exclusive semaphore at interrupt time

**ERROR_SEM_OWNER_DIED (105)**
- Previous ownership of semaphore ended

**ERROR_SEM_USER_LIMIT (106)**
- Insert disk for drive %1

**ERROR_DISK_CHANGE (107)**
- Program stopped because alternate disk not inserted

**ERROR_DRIVE_LOCKED (108)**
- Disk in drive locked

**ERROR_BROKEN_PIPE (109)**
- Pipe ended

**ERROR_OPEN_FAILED (110)**
- System cannot open specified device or file

**ERROR_BUFFER_OVERFLOW (111)**
- File name too long

**ERROR_DISK_FULL (112)**
- Disk full

**ERROR_NO_MORE_SEARCH_HANDLES (113)**
- No more internal file identifiers available

**ERROR_INVALID_TARGET_HANDLE (114)**
- Target internal file identifier incorrect

**ERROR_INVALID_CATEGORY (117)**
- IOCTL call made by application not correct

**ERROR_INVALID_VERIFY_SWITCH (118)**
- Verify-on-write switch parameter value not correct

**ERROR_BAD_DRIVER_LEVEL (119)**
- System does not support command requested

**ERROR_CALL_NOT_IMPLEMENTED (120)**
- Function not supported on this system

**ERROR_SEM_TIMEOUT (121)**
- Semaphore timeout period expired

**ERROR_INSUFFICIENT_BUFFER (122)**
- Data area passed to system call too small

**ERROR_INVALID_NAME (123)**
- File name, directory name, or volume label syntax incorrect

**ERROR_INVALID_LEVEL (124)**
- System call level not correct

**ERROR_NO_VOLUME_LABEL (125)**
- Disk has no volume label

**ERROR_MOD_NOT_FOUND (126)**
- Specified module not found

**ERROR_PROC_NOT_FOUND (127)**
- Specified procedure not found

**ERROR_WAIT_NO_CHILDREN (128)**
- No child processes to wait for

**ERROR_CHILD_NOT_COMPLETE (129)**
- %1 application not Win32

**ERROR_DIRECT_ACCESS_HANDLE (130)**
- Attempt to use file handle to open disk partition

**ERROR_NEGATIVE_SEEK (131)**
- Attempt to move file pointer before beginning of file

**ERROR_SEEK_ON_DEVICE (132)**
- File pointer cannot be set on specified device or file

**ERROR_IS_JOIN_TARGET (133)**
- JOIN or SUBST command cannot be used

**ERROR_IS_JOINED (134)**
- Attempt to use JOIN or SUBST on joined drive

**ERROR_IS_SUBSTED (135)**
- Attempt to use JOIN or SUBST on substituted drive

**ERROR_NOT_JOINED (136)**
- System tried to delete JOIN of not joined drive

**ERROR_NOT_SUBSTED (137)**
- System tried to delete SUBST of not substituted drive

**ERROR_JOIN_TO_JOIN (138)**
- System tried to join drive to directory on joined drive

**ERROR_SUBST_TO_SUBST (139)**
- System tried to substitute drive to directory on substituted drive

**ERROR_JOIN_TO_SUBST (140)**
- System tried to join drive to directory on substituted drive

**ERROR_SUBST_TO_JOIN (141)**
- System tried to SUBST drive to directory on joined drive

**ERROR_BUSY_DRIVE (142)**
- System cannot perform JOIN or SUBST at this time

**ERROR_SAME_DRIVE (143)**
- System cannot join or substitute to same drive

**ERROR_DIR_NOT_ROOT (144)**
- Directory not root directory

**ERROR_DIR_NOT_EMPTY (145)**
- Directory not empty

**ERROR_IS_SUBST_PATH (146)**
- Path being used in substitute

**ERROR_IS_JOIN_PATH (147)**
- Not enough resources to process command

**ERROR_PATH_BUSY (148)**
- Path cannot be used at this time

**ERROR_IS_SUBST_TARGET (149)**
- Attempt to join or substitute drive for which directory is target

**ERROR_SYSTEM_TRACE (150)**
- System trace information not specified or disallowed

**ERROR_INVALID_EVENT_COUNT (151)**
- Number of specified events for DosMuxSemWait not correct

**ERROR_TOO_MANY_MUXWAITERS (152)**
- DosMuxSemWait did not execute; too many semaphores

**ERROR_INVALID_LIST_FORMAT (153)**
- DosMuxSemWait list incorrect

**ERROR_LABEL_TOO_LONG (154)**
- Volume label entered exceeds 11 characters

**ERROR_TOO_MANY_TCBS (155)**
- Cannot create another thread

**ERROR_SIGNAL_REFUSED (156)**
- Recipient process refused signal

**ERROR_DISCARDED (157)**
- Segment already discarded and cannot be locked

**ERROR_NOT_LOCKED (158)**
- Segment already unlocked

**ERROR_BAD_THREADID_ADDR (159)**
- Thread ID address incorrect

**ERROR_BAD_ARGUMENTS (160)**
- Argument string passed to DosExecPgm incorrect

**ERROR_BAD_PATHNAME (161)**
- Pathname invalid

**ERROR_SIGNAL_PENDING (162)**
- Signal already pending

**ERROR_MAX_THRDS_REACHED (164)**
- No more threads can be created in system

**ERROR_LOCK_FAILED (167)**
- Attempt to lock region failed

**ERROR_BUSY (170)**
- Requested resource in use

**ERROR_CANCEL_VIOLATION (173)**
- Lock request for region not outstanding

**ERROR_ATOMIC_LOCKS_NOT_SUPPORTED (174)**
- File system does not support atomic changes to lock type

**ERROR_INVALID_SEGMENT_NUMBER (180)**
- System detected segment number incorrect

**ERROR_INVALID_ORDINAL (182)**
- Operating system cannot run %1

**ERROR_ALREADY_EXISTS (183)**
- Cannot create file when it already exists

**ERROR_INVALID_FLAG_NUMBER (186)**
- Flag passed incorrect

**ERROR_SEM_NOT_FOUND (187)**
- Specified system semaphore name not found

**ERROR_INVALID_STARTING_CODESEG (188)**
- Operating system cannot run %1

**ERROR_INVALID_STACKSEG (189)**
- Operating system cannot run %1

**ERROR_INVALID_MODULETYPE (190)**
- Operating system cannot run %1

**ERROR_INVALID_EXE_SIGNATURE (191)**
- Cannot run %1 in Win32 mode

**ERROR_EXE_MARKED_INVALID (192)**
- Operating system cannot run %1

**ERROR_BAD_EXE_FORMAT (193)**
- %1 not valid Win32 application

**ERROR_ITERATED_DATA_EXCEEDS_64k (194)**
- Operating system cannot run %1

**ERROR_INVALID_MINALLOCSIZE (195)**
- Operating system cannot run %1

**ERROR_DYNLINK_FROM_INVALID_RING (196)**
- Operating system cannot run application

**ERROR_IOPL_NOT_ENABLED (197)**
- Operating system not currently configured to run application

**ERROR_INVALID_SEGDPL (198)**
- Operating system cannot run %1

**ERROR_AUTODATASEG_EXCEEDS_64k (199)**
- Operating system cannot run %1

**ERROR_RING2SEG_MUST_BE_MOVABLE (200)**
- Code segment cannot be greater than or equal to 64K

**ERROR_RELOC_CHAIN_XEEDS_SEGLIM (201)**
- Operating system cannot run %1

**ERROR_INFLOOP_IN_RELOC_CHAIN (202)**
- Operating system cannot run %1

**ERROR_ENVVAR_NOT_FOUND (203)**
- System could not find environment option

**ERROR_NO_SIGNAL_SENT (205)**
- No process in command subtree has signal handler

**ERROR_FILENAME_EXCED_RANGE (206)**
- File name or extension too long

**ERROR_RING2_STACK_IN_USE (207)**
- Ring 2 stack in use

**ERROR_META_EXPANSION_TOO_LONG (208)**
- Error in use of filename wildcard characters

**ERROR_INVALID_SIGNAL_NUMBER (209)**
- Signal being posted not correct

**ERROR_THREAD_1_INACTIVE (210)**
- Signal handler not set

**ERROR_LOCKED (212)**
- Segment locked and cannot be reallocated

**ERROR_TOO_MANY_MODULES (214)**
- Too many dynamic-link modules attached

**ERROR_NESTING_NOT_ALLOWED (215)**
- Cannot nest calls to LoadModule

**ERROR_EXE_MACHINE_TYPE_MISMATCH (216)**
- Image file %1 valid but for different machine type

**ERROR_EXE_CANNOT_MODIFY_SIGNED_BINARY (217)**
- Attempt to modify signed binary

**ERROR_EXE_CANNOT_MODIFY_STRONG_SIGNED_BINARY (218)**
- Attempt to modify strong signed binary

**ERROR_BAD_PIPE (230)**
- Pipe state invalid

**ERROR_PIPE_BUSY (231)**
- All pipe instances busy

**ERROR_NO_DATA (232)**
- Pipe being closed

**ERROR_PIPE_NOT_CONNECTED (233)**
- No process on other end of pipe

**ERROR_MORE_DATA (234)**
- More data available

**ERROR_VC_DISCONNECTED (240)**
- Session canceled

**ERROR_INVALID_EA_NAME (254)**
- Extended attribute name invalid

**ERROR_EA_LIST_INCONSISTENT (255)**
- Extended attributes inconsistent

**WAIT_TIMEOUT (258)**
- Wait operation timed out

**ERROR_NO_MORE_ITEMS (259)**
- No more data available

**ERROR_CANNOT_COPY (266)**
- Cannot copy non-callable function

**ERROR_DIRECTORY (267)**
- Directory name invalid

**ERROR_EAS_DIDNT_FIT (275)**
- Extended attributes didn't fit

**ERROR_EA_FILE_CORRUPT (276)**
- Extended attribute file on mounted file system corrupt

**ERROR_EA_TABLE_FULL (277)**
- Extended attribute table file full

**ERROR_INVALID_EA_HANDLE (278)**
- Specified extended attribute handle invalid

**ERROR_EAS_NOT_SUPPORTED (282)**
- Mounted file system does not support extended attributes

**ERROR_NOT_OWNER (288)**
- Attempt to release mutex not owned by caller

**ERROR_TOO_MANY_POSTS (298)**
- Too many posts made to semaphore

**ERROR_PARTIAL_COPY (299)**
- Read/WriteProcessMemory partially completed

**ERROR_OPLOCK_NOT_GRANTED (300)**
- OPLOCK not granted

**ERROR_INVALID_OPLOCK_PROTOCOL (301)**
- Invalid OPLOCK protocol

**ERROR_DISK_TOO_FRAGMENTED (302)**
- Disk too fragmented for requested operation

**ERROR_DELETE_PENDING (303)**
- File deletion pending

**ERROR_INCOMPATIBLE_WITH_GLOBAL_SHORT_NAME_REGISTRY_SETTING (304)**
- Short name settings incompatible with global registry

**ERROR_SHORT_NAMES_NOT_ENABLED_ON_VOLUME (305)**
- Short names not enabled on volume

**ERROR_SECURITY_STREAM_IS_INCONSISTENT (306)**
- Security stream inconsistent with operation

**ERROR_INVALID_LOCK_RANGE (307)**
- Invalid lock range for file

**ERROR_IMAGE_SUBSYSTEM_NOT_PRESENT (308)**
- Image subsystem not present

**ERROR_NOTIFICATION_GUID_ALREADY_DEFINED (309)**
- Notification GUID already defined

**ERROR_INVALID_EXCEPTION_HANDLER (310)**
- Invalid exception handler

**ERROR_DUPLICATE_PRIVILEGES (311)**
- Duplicate privileges

**ERROR_NO_RANGES_PROCESSED (312)**
- No ranges processed

**ERROR_NOT_ALLOWED_ON_SYSTEM_FILE (313)**
- Operation not allowed on system file

**ERROR_DISK_RESOURCES_EXHAUSTED (314)**
- Disk resources exhausted

**ERROR_INVALID_TOKEN (315)**
- Invalid token

**ERROR_DEVICE_FEATURE_NOT_SUPPORTED (316)**
- Device feature not supported

**ERROR_MR_MID_NOT_FOUND (317)**
- Message resource not found

**ERROR_SCOPE_NOT_FOUND (318)**
- Scope not found

**ERROR_UNDEFINED_SCOPE (319)**
- Undefined scope

**ERROR_INVALID_CAP (320)**
- Invalid capability

**ERROR_DEVICE_UNREACHABLE (321)**
- Device unreachable

**ERROR_DEVICE_NO_RESOURCES (322)**
- Device has no resources

**ERROR_DATA_CHECKSUM_ERROR (323)**
- Data checksum error

**ERROR_INTERMIXED_KERNEL_EA_OPERATION (324)**
- Intermixed kernel EA operation

**ERROR_FILE_LEVEL_TRIM_NOT_SUPPORTED (326)**
- File level trim not supported

**ERROR_OFFSET_ALIGNMENT_VIOLATION (327)**
- Offset alignment violation

**ERROR_INVALID_FIELD_IN_PARAMETER_LIST (328)**
- Invalid field in parameter list

**ERROR_OPERATION_IN_PROGRESS (329)**
- Operation in progress

**ERROR_BAD_DEVICE_PATH (330)**
- Bad device path

**ERROR_TOO_MANY_DESCRIPTORS (331)**
- Too many descriptors

**ERROR_SCRUB_DATA_DISABLED (332)**
- Scrub data disabled

**ERROR_NOT_REDUNDANT_STORAGE (333)**
- Not redundant storage

**ERROR_RESIDENT_FILE_NOT_SUPPORTED (334)**
- Resident file not supported

**ERROR_COMPRESSED_FILE_NOT_SUPPORTED (335)**
- Compressed file not supported

**ERROR_DIRECTORY_NOT_SUPPORTED (336)**
- Directory not supported

**ERROR_NOT_READ_FROM_COPY (337)**
- Not read from copy

**ERROR_FT_WRITE_FAILURE (338)**
- FT write failure

**ERROR_FT_DI_SCAN_REQUIRED (339)**
- FT DI scan required

**ERROR_INVALID_KERNEL_INFO_VERSION (340)**
- Invalid kernel info version

**ERROR_INVALID_PEP_INFO_VERSION (341)**
- Invalid PEP info version

**ERROR_OBJECT_NOT_EXTERNALLY_BACKED (342)**
- Object not externally backed

**ERROR_EXTERNAL_BACKING_PROVIDER_UNKNOWN (343)**
- External backing provider unknown

**ERROR_COMPRESSION_NOT_BENEFICIAL (344)**
- Compression not beneficial

**ERROR_STORAGE_TOPOLOGY_ID_MISMATCH (345)**
- Storage topology ID mismatch

**ERROR_BLOCKED_BY_PARENTAL_CONTROLS (346)**
- Blocked by parental controls

**ERROR_BLOCK_TOO_MANY_REFERENCES (347)**
- Block too many references

**ERROR_MARKED_TO_DISALLOW_WRITES (348)**
- Marked to disallow writes

**ERROR_ENCLAVE_FAILURE (349)**
- Enclave failure

**ERROR_FAIL_NOACTION_REBOOT (350)**
- Fail noaction reboot

**ERROR_FAIL_SHUTDOWN (351)**
- Fail shutdown

**ERROR_FAIL_RESTART (352)**
- Fail restart

**ERROR_MAX_SESSIONS_REACHED (353)**
- Maximum sessions reached

**ERROR_NETWORK_ACCESS_DENIED_EDP (354)**
- Network access denied by EDP policy

**ERROR_DEVICE_HINT_NAME_BUFFER_TOO_SMALL (355)**
- Device hint name buffer too small

**ERROR_EDP_POLICY_DENIES_OPERATION (356)**
- EDP policy denies operation

**ERROR_EDP_DPL_POLICY_CANT_BE_SATISFIED (357)**
- EDP DPL policy cannot be satisfied

**ERROR_CLOUD_FILE_SYNC_ROOT_METADATA_CORRUPT (358)**
- Cloud file sync root metadata corrupt

**ERROR_DEVICE_IN_MAINTENANCE (359)**
- Device in maintenance

**ERROR_NOT_SUPPORTED_ON_DAX (360)**
- Not supported on DAX

**ERROR_DAX_MAPPING_EXISTS (361)**
- DAX mapping exists

**ERROR_CLOUD_FILE_PROVIDER_NOT_RUNNING (362)**
- Cloud file provider not running

**ERROR_CLOUD_FILE_METADATA_CORRUPT (363)**
- Cloud file metadata corrupt

**ERROR_CLOUD_FILE_METADATA_TOO_LARGE (364)**
- Cloud file metadata too large

**ERROR_CLOUD_FILE_PROPERTY_BLOB_TOO_LARGE (365)**
- Cloud file property blob too large

**ERROR_CLOUD_FILE_PROPERTY_BLOB_CHECKSUM_MISMATCH (366)**
- Cloud file property blob checksum mismatch

**ERROR_CHILD_PROCESS_BLOCKED (367)**
- Child process blocked

**ERROR_STORAGE_LOST_DATA_PERSISTENCE (368)**
- Storage lost data persistence

**ERROR_FILE_SYSTEM_VIRTUALIZATION_UNAVAILABLE (369)**
- File system virtualization unavailable

**ERROR_FILE_SYSTEM_VIRTUALIZATION_METADATA_CORRUPT (370)**
- File system virtualization metadata corrupt

**ERROR_FILE_SYSTEM_VIRTUALIZATION_BUSY (371)**
- File system virtualization busy

**ERROR_FILE_SYSTEM_VIRTUALIZATION_PROVIDER_UNKNOWN (372)**
- File system virtualization provider unknown

**ERROR_GDI_HANDLE_LEAK (373)**
- GDI handle leak

**ERROR_CLOUD_FILE_TOO_MANY_PROPERTY_BLOBS (374)**
- Cloud file too many property blobs

**ERROR_CLOUD_FILE_PROPERTY_VERSION_NOT_SUPPORTED (375)**
- Cloud file property version not supported

**ERROR_NOT_A_CLOUD_FILE (376)**
- Not a cloud file

**ERROR_CLOUD_FILE_NOT_IN_SYNC (377)**
- Cloud file not in sync

**ERROR_CLOUD_FILE_ALREADY_CONNECTED (378)**
- Cloud file already connected

**ERROR_CLOUD_FILE_NOT_SUPPORTED (379)**
- Cloud file not supported

**ERROR_CLOUD_FILE_INVALID_REQUEST (380)**
- Cloud file invalid request

**ERROR_CLOUD_FILE_READ_ONLY_VOLUME (381)**
- Cloud file read-only volume

**ERROR_CLOUD_FILE_CONNECTED_PROVIDER_ONLY (382)**
- Cloud file connected provider only

**ERROR_CLOUD_FILE_VALIDATION_FAILED (383)**
- Cloud file validation failed

**ERROR_SMB1_NOT_AVAILABLE (384)**
- SMB1 not available

**ERROR_FILE_SYSTEM_VIRTUALIZATION_INVALID_OPERATION (385)**
- File system virtualization invalid operation

**ERROR_CLOUD_FILE_AUTHENTICATION_FAILED (386)**
- Cloud file authentication failed

**ERROR_CLOUD_FILE_INSUFFICIENT_RESOURCES (387)**
- Cloud file insufficient resources

**ERROR_CLOUD_FILE_NETWORK_UNAVAILABLE (388)**
- Cloud file network unavailable

**ERROR_CLOUD_FILE_UNSUCCESSFUL (389)**
- Cloud file unsuccessful

**ERROR_CLOUD_FILE_NOT_UNDER_SYNC_ROOT (390)**
- Cloud file not under sync root

**ERROR_CLOUD_FILE_IN_USE (391)**
- Cloud file in use

**ERROR_CLOUD_FILE_PINNED (392)**
- Cloud file pinned

**ERROR_CLOUD_FILE_REQUEST_ABORTED (393)**
- Cloud file request aborted

**ERROR_CLOUD_FILE_PROPERTY_CORRUPT (394)**
- Cloud file property corrupt

**ERROR_CLOUD_FILE_ACCESS_DENIED (395)**
- Cloud file access denied

**ERROR_CLOUD_FILE_INCOMPATIBLE_HARDLINKS (396)**
- Cloud file incompatible hardlinks

**ERROR_CLOUD_FILE_PROPERTY_LOCK_CONFLICT (397)**
- Cloud file property lock conflict

**ERROR_CLOUD_FILE_REQUEST_CANCELED (398)**
- Cloud file request canceled

**ERROR_EXTERNAL_SYSKEY_NOT_SUPPORTED (399)**
- External syskey not supported

**ERROR_THREAD_MODE_ALREADY_BACKGROUND (400)**
- Thread mode already background

**ERROR_THREAD_MODE_NOT_BACKGROUND (401)**
- Thread mode not background

**ERROR_PROCESS_MODE_ALREADY_BACKGROUND (402)**
- Process mode already background

**ERROR_PROCESS_MODE_NOT_BACKGROUND (403)**
- Process mode not background

**ERROR_CLOUD_FILE_PROVIDER_TERMINATED (404)**
- Cloud file provider terminated

**ERROR_NOT_A_CLOUD_SYNC_ROOT (405)**
- Not a cloud sync root

**ERROR_FILE_PROTECTED_UNDER_DPL (406)**
- File protected under DPL

**ERROR_VOLUME_NOT_CLUSTER_ALIGNED (407)**
- Volume not cluster aligned

**ERROR_NO_PHYSICALLY_ALIGNED_FREE_SPACE_FOUND (408)**
- No physically aligned free space found

**ERROR_APPX_FILE_NOT_ENCRYPTED (409)**
- APPX file not encrypted

**ERROR_RWRAW_ENCRYPTED_FILE_NOT_ENCRYPTED (410)**
- RWRAW encrypted file not encrypted

**ERROR_RWRAW_ENCRYPTED_INVALID_EDATAINFO_FILEOFFSET (411)**
- RWRAW encrypted invalid EDATAINFO fileoffset

**ERROR_RWRAW_ENCRYPTED_INVALID_EDATAINFO_FILERANGE (412)**
- RWRAW encrypted invalid EDATAINFO filerange

**ERROR_RWRAW_ENCRYPTED_INVALID_EDATAINFO_PARAMETER (413)**
- RWRAW encrypted invalid EDATAINFO parameter

**ERROR_LINUX_SUBSYSTEM_NOT_PRESENT (414)**
- Linux subsystem not present

**ERROR_FT_READ_FAILURE (415)**
- FT read failure

**ERROR_STORAGE_RESERVE_ID_INVALID (416)**
- Storage reserve ID invalid

**ERROR_STORAGE_RESERVE_DOES_NOT_EXIST (417)**
- Storage reserve does not exist

**ERROR_STORAGE_RESERVE_ALREADY_EXISTS (418)**
- Storage reserve already exists

**ERROR_STORAGE_RESERVE_NOT_EMPTY (419)**
- Storage reserve not empty

**ERROR_NOT_A_DAX_VOLUME (420)**
- Not a DAX volume

**ERROR_NOT_DAX_MAPPABLE (421)**
- Not DAX mappable

**ERROR_TIME_SENSITIVE_THREAD (422)**
- Time sensitive thread

**ERROR_DPL_NOT_SUPPORTED_FOR_USER_BUFFER (423)**
- DPL not supported for user buffer

**ERROR_CASE_DIFFERING_NAMES_IN_DIR (424)**
- Case differing names in directory

**ERROR_FILE_NOT_SUPPORTED (425)**
- File not supported

**ERROR_CLOUD_FILE_REQUEST_TIMEOUT (426)**
- Cloud file request timeout

**ERROR_NO_TASK_QUEUE (427)**
- No task queue

**ERROR_SRC_SRV_DLL_LOAD_FAILED (428)**
- Source server DLL load failed

**ERROR_NOT_SUPPORTED_WITH_BTT (429)**
- Not supported with BTT

**ERROR_ENCRYPTION_DISABLED (430)**
- Encryption disabled

**ERROR_ENCRYPTING_METADATA_DISABLED (431)**
- Encrypting metadata disabled

**ERROR_CANT_CLEAR_ENCRYPTION_FLAG (432)**
- Cannot clear encryption flag

**ERROR_NO_SUCH_DEVICE (433)**
- No such device

**ERROR_CLOUD_FILE_DEHYDRATION_DISALLOWED (434)**
- Cloud file dehydration disallowed

**ERROR_FILE_SNAP_IN_PROGRESS (435)**
- File snap in progress

**ERROR_FILE_SNAP_USER_SECTION_NOT_SUPPORTED (436)**
- File snap user section not supported

**ERROR_FILE_SNAP_MODIFY_NOT_SUPPORTED (437)**
- File snap modify not supported

**ERROR_FILE_SNAP_IO_NOT_COORDINATED (438)**
- File snap IO not coordinated

**ERROR_FILE_SNAP_UNEXPECTED_ERROR (439)**
- File snap unexpected error

**ERROR_FILE_SNAP_INVALID_PARAMETER (440)**
- File snap invalid parameter

**ERROR_UNSATISFIED_DEPENDENCIES (441)**
- Unsatisfied dependencies

**ERROR_CASE_SENSITIVE_PATH (442)**
- Case sensitive path

**ERROR_UNEXPECTED_NTCACHEMANAGER_ERROR (443)**
- Unexpected NtCacheManager error

**ERROR_LINUX_SUBSYSTEM_UPDATE_REQUIRED (444)**
- Linux subsystem update required

**ERROR_DLP_POLICY_WARNS_AGAINST_OPERATION (445)**
- DLP policy warns against operation

**ERROR_DLP_POLICY_DENIES_OPERATION (446)**
- DLP policy denies operation

**ERROR_SECURITY_DENIES_OPERATION (447)**
- Security denies operation

**ERROR_UNSUPPORTED_FS_BY_DLP (448)**
- Unsupported FS by DLP

**ERROR_DLP_POLICY_SILENTLY_FAILS (449)**
- DLP policy silently fails

**ERROR_CAPAUTHZ_NOT_DEVUNLOCKED (450)**
- CapAuthz not device unlocked

**ERROR_CAPAUTHZ_CHANGE_TYPE (451)**
- CapAuthz change type

**ERROR_CAPAUTHZ_NOT_PROVISIONED (452)**
- CapAuthz not provisioned

**ERROR_CAPAUTHZ_NOT_AUTHORIZED (453)**
- CapAuthz not authorized

**ERROR_CAPAUTHZ_NO_POLICY (454)**
- CapAuthz no policy

**ERROR_CAPAUTHZ_DB_CORRUPTED (455)**
- CapAuthz database corrupted

**ERROR_CAPAUTHZ_SCCD_INVALID_CATALOG (456)**
- CapAuthz SCCD invalid catalog

**ERROR_CAPAUTHZ_SCCD_NO_AUTH_ENTITY (457)**
- CapAuthz SCCD no auth entity

**ERROR_CAPAUTHZ_SCCD_PARSE_ERROR (458)**
- CapAuthz SCCD parse error

**ERROR_CAPAUTHZ_SCCD_DEV_MODE_REQUIRED (459)**
- CapAuthz SCCD device mode required

**ERROR_CAPAUTHZ_SCCD_NO_CAPABILITY_MATCH (460)**
- CapAuthz SCCD no capability match

**ERROR_CAPAUTHZ_DEVICE_NOT_JOINED (461)**
- CapAuthz device not joined

**ERROR_CAPAUTHZ_NOT_WINDOWS_SIGNED (462)**
- CapAuthz not Windows signed

**ERROR_CAPAUTHZ_CANT_ADD_TO_GROUP (463)**
- CapAuthz cannot add to group

**ERROR_CAPAUTHZ_CANT_ADD_CAPABILITY_TO_APP (464)**
- CapAuthz cannot add capability to app

**ERROR_CAPAUTHZ_CANT_REMOVE_FROM_GROUP (465)**
- CapAuthz cannot remove from group

**ERROR_CAPAUTHZ_CANT_REMOVE_CAPABILITY_FROM_APP (466)**
- CapAuthz cannot remove capability from app

**ERROR_CAPAUTHZ_CANT_STAGING_BOOT_APP (467)**
- CapAuthz cannot staging boot app

**ERROR_CAPAUTHZ_CANT_CHANGE_APPIDs (468)**
- CapAuthz cannot change AppIDs

**ERROR_CAPAUTHZ_NOT_FRIENDLY_IMAGE (469)**
- CapAuthz not friendly image

**ERROR_CAPAUTHZ_NOT_PACKAGED_APP (470)**
- CapAuthz not packaged app

**ERROR_CAPAUTHZ_PACKAGED_APP_HAS_EXTENSION (471)**
- CapAuthz packaged app has extension

**ERROR_CAPAUTHZ_APP_INFORMATION_MISMATCH (472)**
- CapAuthz app information mismatch

**ERROR_CAPAUTHZ_GET_APP_INFORMATION_FAILED (473)**
- CapAuthz get app information failed

**ERROR_CAPAUTHZ_DELETE_APP_INFORMATION_FAILED (474)**
- CapAuthz delete app information failed

**ERROR_CAPAUTHZ_CANNOT_CREATE_APP_INFORMATION (475)**
- CapAuthz cannot create app information

**ERROR_CAPAUTHZ_NOT_APP_CONTAINER (476)**
- CapAuthz not app container

**ERROR_CAPAUTHZ_NOT_SUPPORTED (477)**
- CapAuthz not supported

**ERROR_CAPAUTHZ_NO_SANDBOX (478)**
- CapAuthz no sandbox

**ERROR_CAPAUTHZ_CANNOT_CLOSE_HANDLE (479)**
- CapAuthz cannot close handle

**ERROR_CAPAUTHZ_CANNOT_GRANT_ACCESS (480)**
- CapAuthz cannot grant access

**ERROR_CAPAUTHZ_CANNOT_REVOKE_ACCESS (481)**
- CapAuthz cannot revoke access

**ERROR_CAPAUTHZ_CANNOT_GENERATE_CONFINED_TOKEN (482)**
- CapAuthz cannot generate confined token

**ERROR_CAPAUTHZ_CANNOT_GET_SECURITY_ATTRIBUTES (483)**
- CapAuthz cannot get security attributes

**ERROR_CAPAUTHZ_CANNOT_QUERY_ACCESS (484)**
- CapAuthz cannot query access

**ERROR_CAPAUTHZ_INVALID_OPERATION (485)**
- CapAuthz invalid operation

**ERROR_CAPAUTHZ_INVALID_SECURITY_ATTRIBUTES (486)**
- CapAuthz invalid security attributes

**ERROR_CAPAUTHZ_INVALID_SID (487)**
- CapAuthz invalid SID

**ERROR_CAPAUTHZ_INVALID_CAPABILITY (488)**
- CapAuthz invalid capability

**ERROR_CAPAUTHZ_INVALID_CONFINED_TOKEN (489)**
- CapAuthz invalid confined token

**ERROR_CAPAUTHZ_INVALID_APP_CONTAINER (490)**
- CapAuthz invalid app container

**ERROR_CAPAUTHZ_INVALID_APP_CONTAINER_SID (491)**
- CapAuthz invalid app container SID

**ERROR_CAPAUTHZ_INVALID_SECURITY_ATTRIBUTES_COUNT (492)**
- CapAuthz invalid security attributes count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_TOO_LARGE (493)**
- CapAuthz security attributes too large

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_TOO_MANY (494)**
- CapAuthz security attributes too many

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_TOO_COMPLEX (495)**
- CapAuthz security attributes too complex

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_FLAGS (496)**
- CapAuthz security attributes invalid flags

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_TYPE (497)**
- CapAuthz security attributes invalid type

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_VALUE (498)**
- CapAuthz security attributes invalid value

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_NAME (499)**
- CapAuthz security attributes invalid name

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_USAGE (500)**
- CapAuthz security attributes invalid usage

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_DATA (501)**
- CapAuthz security attributes invalid data

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_STRING (502)**
- CapAuthz security attributes invalid string

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_SID (503)**
- CapAuthz security attributes invalid SID

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_CAPABILITY (504)**
- CapAuthz security attributes invalid capability

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER (505)**
- CapAuthz security attributes invalid app container

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID (506)**
- CapAuthz security attributes invalid app container SID

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_NAME (507)**
- CapAuthz security attributes invalid app container name

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_FLAGS (508)**
- CapAuthz security attributes invalid app container flags

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_ACCESS (509)**
- CapAuthz security attributes invalid app container access

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_TOKEN (510)**
- CapAuthz security attributes invalid app container token

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_HANDLE (511)**
- CapAuthz security attributes invalid app container handle

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_INFORMATION (512)**
- CapAuthz security attributes invalid app container information

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_CAPABILITY (513)**
- CapAuthz security attributes invalid app container capability

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING (514)**
- CapAuthz security attributes invalid app container SID string

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_VALUE (515)**
- CapAuthz security attributes invalid app container SID value

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_TYPE (516)**
- CapAuthz security attributes invalid app container SID type

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_COUNT (517)**
- CapAuthz security attributes invalid app container SID count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_SIZE (518)**
- CapAuthz security attributes invalid app container SID size

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_ATTRIBUTES (519)**
- CapAuthz security attributes invalid app container SID attributes

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_AUTHORITY (520)**
- CapAuthz security attributes invalid app container SID authority

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_SUB_AUTHORITY (521)**
- CapAuthz security attributes invalid app container SID sub authority

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_RELATIVE_ID (522)**
- CapAuthz security attributes invalid app container SID relative ID

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_IDENTIFIER_AUTHORITY (523)**
- CapAuthz security attributes invalid app container SID identifier authority

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_LENGTH (524)**
- CapAuthz security attributes invalid app container SID length

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_BUFFER (525)**
- CapAuthz security attributes invalid app container SID buffer

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_BUFFER (526)**
- CapAuthz security attributes invalid app container SID string buffer

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_LENGTH (527)**
- CapAuthz security attributes invalid app container SID string length

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SIZE (528)**
- CapAuthz security attributes invalid app container SID string size

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_COUNT (529)**
- CapAuthz security attributes invalid app container SID string count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_OFFSET (530)**
- CapAuthz security attributes invalid app container SID string offset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_FORMAT (531)**
- CapAuthz security attributes invalid app container SID string format

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_CHARSET (532)**
- CapAuthz security attributes invalid app container SID string charset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ENCODING (533)**
- CapAuthz security attributes invalid app container SID string encoding

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_VERSION (534)**
- CapAuthz security attributes invalid app container SID string version

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_REVISION (535)**
- CapAuthz security attributes invalid app container SID string revision

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT (536)**
- CapAuthz security attributes invalid app container SID sub authority count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY (537)**
- CapAuthz security attributes invalid app container SID string identifier authority

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY (538)**
- CapAuthz security attributes invalid app container SID string sub authority

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID (539)**
- CapAuthz security attributes invalid app container SID string relative ID

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES (540)**
- CapAuthz security attributes invalid app container SID string attributes

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY (541)**
- CapAuthz security attributes invalid app container SID string authority

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT (542)**
- CapAuthz security attributes invalid app container SID string sub authority count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE (543)**
- CapAuthz security attributes invalid app container SID string identifier authority value

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE (544)**
- CapAuthz security attributes invalid app container SID string sub authority value

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE (545)**
- CapAuthz security attributes invalid app container SID string relative ID value

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE (546)**
- CapAuthz security attributes invalid app container SID string attributes value

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE (547)**
- CapAuthz security attributes invalid app container SID string authority value

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE (548)**
- CapAuthz security attributes invalid app container SID string sub authority count value

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_SIZE (549)**
- CapAuthz security attributes invalid app container SID string identifier authority value size

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_SIZE (550)**
- CapAuthz security attributes invalid app container SID string sub authority value size

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_SIZE (551)**
- CapAuthz security attributes invalid app container SID string relative ID value size

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE_SIZE (552)**
- CapAuthz security attributes invalid app container SID string attributes value size

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE_SIZE (553)**
- CapAuthz security attributes invalid app container SID string authority value size

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE_SIZE (554)**
- CapAuthz security attributes invalid app container SID string sub authority count value size

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_COUNT (555)**
- CapAuthz security attributes invalid app container SID string identifier authority value count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_COUNT (556)**
- CapAuthz security attributes invalid app container SID string sub authority value count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_COUNT (557)**
- CapAuthz security attributes invalid app container SID string relative ID value count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE_COUNT (558)**
- CapAuthz security attributes invalid app container SID string attributes value count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE_COUNT (559)**
- CapAuthz security attributes invalid app container SID string authority value count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE_COUNT (560)**
- CapAuthz security attributes invalid app container SID string sub authority count value count

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_FORMAT (561)**
- CapAuthz security attributes invalid app container SID string identifier authority value format

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_FORMAT (562)**
- CapAuthz security attributes invalid app container SID string sub authority value format

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_FORMAT (563)**
- CapAuthz security attributes invalid app container SID string relative ID value format

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE_FORMAT (564)**
- CapAuthz security attributes invalid app container SID string attributes value format

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE_FORMAT (565)**
- CapAuthz security attributes invalid app container SID string authority value format

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE_FORMAT (566)**
- CapAuthz security attributes invalid app container SID string sub authority count value format

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_CHARSET (567)**
- CapAuthz security attributes invalid app container SID string identifier authority value charset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_CHARSET (568)**
- CapAuthz security attributes invalid app container SID string sub authority value charset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_CHARSET (569)**
- CapAuthz security attributes invalid app container SID string relative ID value charset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE_CHARSET (570)**
- CapAuthz security attributes invalid app container SID string attributes value charset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE_CHARSET (571)**
- CapAuthz security attributes invalid app container SID string authority value charset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE_CHARSET (572)**
- CapAuthz security attributes invalid app container SID string sub authority count value charset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_ENCODING (573)**
- CapAuthz security attributes invalid app container SID string identifier authority value encoding

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_ENCODING (574)**
- CapAuthz security attributes invalid app container SID string sub authority value encoding

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_ENCODING (575)**
- CapAuthz security attributes invalid app container SID string relative ID value encoding

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE_ENCODING (576)**
- CapAuthz security attributes invalid app container SID string attributes value encoding

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE_ENCODING (577)**
- CapAuthz security attributes invalid app container SID string authority value encoding

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE_ENCODING (578)**
- CapAuthz security attributes invalid app container SID string sub authority count value encoding

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_VERSION (579)**
- CapAuthz security attributes invalid app container SID string identifier authority value version

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_VERSION (580)**
- CapAuthz security attributes invalid app container SID string sub authority value version

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_VERSION (581)**
- CapAuthz security attributes invalid app container SID string relative ID value version

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE_VERSION (582)**
- CapAuthz security attributes invalid app container SID string attributes value version

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE_VERSION (583)**
- CapAuthz security attributes invalid app container SID string authority value version

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE_VERSION (584)**
- CapAuthz security attributes invalid app container SID string sub authority count value version

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_REVISION (585)**
- CapAuthz security attributes invalid app container SID string identifier authority value revision

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_REVISION (586)**
- CapAuthz security attributes invalid app container SID string sub authority value revision

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_REVISION (587)**
- CapAuthz security attributes invalid app container SID string relative ID value revision

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE_REVISION (588)**
- CapAuthz security attributes invalid app container SID string attributes value revision

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE_REVISION (589)**
- CapAuthz security attributes invalid app container SID string authority value revision

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE_REVISION (590)**
- CapAuthz security attributes invalid app container SID string sub authority count value revision

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_OFFSET (591)**
- CapAuthz security attributes invalid app container SID string identifier authority value offset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_OFFSET (592)**
- CapAuthz security attributes invalid app container SID string sub authority value offset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_OFFSET (593)**
- CapAuthz security attributes invalid app container SID string relative ID value offset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_ATTRIBUTES_VALUE_OFFSET (594)**
- CapAuthz security attributes invalid app container SID string attributes value offset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_AUTHORITY_VALUE_OFFSET (595)**
- CapAuthz security attributes invalid app container SID string authority value offset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_COUNT_VALUE_OFFSET (596)**
- CapAuthz security attributes invalid app container SID string sub authority count value offset

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_IDENTIFIER_AUTHORITY_VALUE_BUFFER (597)**
- CapAuthz security attributes invalid app container SID string identifier authority value buffer

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_SUB_AUTHORITY_VALUE_BUFFER (598)**
- CapAuthz security attributes invalid app container SID string sub authority value buffer

**ERROR_CAPAUTHZ_SECURITY_ATTRIBUTES_INVALID_APP_CONTAINER_SID_STRING_RELATIVE_ID_VALUE_BUFFER (599)**
- CapAuthz security attributes invalid app container SID string relative ID value buffer

### Linux/Unix Error Codes

**EPERM (1)**
- Operation not permitted

**ENOENT (2)**
- No such file or directory

**ESRCH (3)**
- No such process

**EINTR (4)**
- Interrupted system call

**EIO (5)**
- Input/output error

**ENXIO (6)**
- No such device or address

**E2BIG (7)**
- Argument list too long

**ENOEXEC (8)**
- Exec format error

**EBADF (9)**
- Bad file descriptor

**ECHILD (10)**
- No child processes

**EAGAIN (11)**
- Resource temporarily unavailable

**ENOMEM (12)**
- Cannot allocate memory

**EACCES (13)**
- Permission denied

**EFAULT (14)**
- Bad address

**ENOTBLK (15)**
- Block device required

**EBUSY (16)**
- Device or resource busy

**EEXIST (17)**
- File exists

**EXDEV (18)**
- Invalid cross-device link

**ENODEV (19)**
- No such device

**ENOTDIR (20)**
- Not a directory

**EISDIR (21)**
- Is a directory

**EINVAL (22)**
- Invalid argument

**ENFILE (23)**
- Too many open files in system

**EMFILE (24)**
- Too many open files

**ENOTTY (25)**
- Inappropriate ioctl for device

**ETXTBSY (26)**
- Text file busy

**EFBIG (27)**
- File too large

**ENOSPC (28)**
- No space left on device

**ESPIPE (29)**
- Illegal seek

**EROFS (30)**
- Read-only file system

**EMLINK (31)**
- Too many links

**EPIPE (32)**
- Broken pipe

**EDOM (33)**
- Numerical argument out of domain

**ERANGE (34)**
- Numerical result out of range

**EDEADLK (35)**
- Resource deadlock avoided

**ENAMETOOLONG (36)**
- File name too long

**ENOLCK (37)**
- No locks available

**ENOSYS (38)**
- Function not implemented

**ENOTEMPTY (39)**
- Directory not empty

**ELOOP (40)**
- Too many levels of symbolic links

**EWOULDBLOCK (11)**
- Operation would block (same as EAGAIN)

**ENOMSG (42)**
- No message of desired type

**EIDRM (43)**
- Identifier removed

**ECHRNG (44)**
- Channel number out of range

**EL2NSYNC (45)**
- Level 2 not synchronized

**EL3HLT (46)**
- Level 3 halted

**EL3RST (47)**
- Level 3 reset

**ELNRNG (48)**
- Link number out of range

**EUNATCH (49)**
- Protocol driver not attached

**ENOCSI (50)**
- No CSI structure available

**EL2HLT (51)**
- Level 2 halted

**EBADE (52)**
- Invalid exchange

**EBADR (53)**
- Invalid request descriptor

**EXFULL (54)**
- Exchange full

**ENOANO (55)**
- No anode

**EBADRQC (56)**
- Invalid request code

**EBADSLT (57)**
- Invalid slot

**EDEADLOCK (58)**
- File locking deadlock error

**EBFONT (59)**
- Bad font file format

**ENOSTR (60)**
- Device not a stream

**ENODATA (61)**
- No data available

**ETIME (62)**
- Timer expired

**ENOSR (63)**
- Out of streams resources

**ENONET (64)**
- Machine is not on the network

**ENOPKG (65)**
- Package not installed

**EREMOTE (66)**
- Object is remote

**ENOLINK (67)**
- Link has been severed

**EADV (68)**
- Advertise error

**ESRMNT (69)**
- Srmount error

**ECOMM (70)**
- Communication error on send

**EPROTO (71)**
- Protocol error

**EMULTIHOP (72)**
- Multihop attempted

**EDOTDOT (73)**
- RFS specific error

**EBADMSG (74)**
- Bad message

**EOVERFLOW (75)**
- Value too large for defined data type

**ENOTUNIQ (76)**
- Name not unique on network

**EBADFD (77)**
- File descriptor in bad state

**EREMCHG (78)**
- Remote address changed

**ELIBACC (79)**
- Can not access a needed shared library

**ELIBBAD (80)**
- Accessing a corrupted shared library

**ELIBSCN (81)**
- .lib section in a.out corrupted

**ELIBMAX (82)**
- Attempting to link in too many shared libraries

**ELIBEXEC (83)**
- Cannot exec a shared library directly

**EILSEQ (84)**
- Illegal byte sequence

**ERESTART (85)**
- Interrupted system call should be restarted

**ESTRPIPE (86)**
- Streams pipe error

**EUSERS (87)**
- Too many users

**ENOTSOCK (88)**
- Socket operation on non-socket

**EDESTADDRREQ (89)**
- Destination address required

**EMSGSIZE (90)**
- Message too long

**EPROTOTYPE (91)**
- Protocol wrong type for socket

**ENOPROTOOPT (92)**
- Protocol not available

**EPROTONOSUPPORT (93)**
- Protocol not supported

**ESOCKTNOSUPPORT (94)**
- Socket type not supported

**EOPNOTSUPP (95)**
- Operation not supported

**EPFNOSUPPORT (96)**
- Protocol family not supported

**EAFNOSUPPORT (97)**
- Address family not supported by protocol

**EADDRINUSE (98)**
- Address already in use

**EADDRNOTAVAIL (99)**
- Cannot assign requested address

**ENETDOWN (100)**
- Network is down

**ENETUNREACH (101)**
- Network is unreachable

**ENETRESET (102)**
- Network dropped connection on reset

**ECONNABORTED (103)**
- Software caused connection abort

**ECONNRESET (104)**
- Connection reset by peer

**ENOBUFS (105)**
- No buffer space available

**EISCONN (106)**
- Transport endpoint is already connected

**ENOTCONN (107)**
- Transport endpoint is not connected

**ESHUTDOWN (108)**
- Cannot send after transport endpoint shutdown

**ETOOMANYREFS (109)**
- Too many references: cannot splice

**ETIMEDOUT (110)**
- Connection timed out

**ECONNREFUSED (111)**
- Connection refused

**EHOSTDOWN (112)**
- Host is down

**EHOSTUNREACH (113)**
- No route to host

**EALREADY (114)**
- Operation already in progress

**EINPROGRESS (115)**
- Operation now in progress

**ESTALE (116)**
- Stale file handle

**EUCLEAN (117)**
- Structure needs cleaning

**ENOTNAM (118)**
- Not a XENIX named type file

**ENAVAIL (119)**
- No XENIX semaphores available

**EISNAM (120)**
- Is a named type file

**EREMOTEIO (121)**
- Remote I/O error

**EDQUOT (122)**
- Disk quota exceeded

**ENOMEDIUM (123)**
- No medium found

**EMEDIUMTYPE (124)**
- Wrong medium type

**ECANCELED (125)**
- Operation canceled

**ENOKEY (126)**
- Required key not available

**EKEYEXPIRED (127)**
- Key has expired

**EKEYREVOKED (128)**
- Key has been revoked

**EKEYREJECTED (129)**
- Key was rejected by service

**EOWNERDEAD (130)**
- Owner died

**ENOTRECOVERABLE (131)**
- State not recoverable

**ERFKILL (132)**
- Operation not possible due to RF-kill

**EHWPOISON (133)**
- Memory page has hardware error

## Programming Error Codes

### SQL Error Codes

**0**
- Successful completion

**1**
- Warning

**100**
- No data found

**-1**
- General error

**-2**
- Internal error

**-3**
- Invalid statement

**-4**
- Constraint violation

**-5**
- Communication error

**-6**
- Authentication failure

**-7**
- Authorization failure

**-8**
- Transaction error

**-9**
- Deadlock

**-10**
- Timeout

### Network Error Codes

**ECONNREFUSED (111)**
- Connection refused

**EHOSTUNREACH (113)**
- No route to host

**ETIMEDOUT (110)**
- Connection timed out

**ENETUNREACH (101)**
- Network is unreachable

**ENETDOWN (100)**
- Network is down

**ECONNABORTED (103)**
- Software caused connection abort

**ECONNRESET (104)**
- Connection reset by peer

**EADDRINUSE (98)**
- Address already in use

**EADDRNOTAVAIL (99)**
- Cannot assign requested address

## Web Application Error Codes

### Common Framework Errors

**CSRF_TOKEN_MISSING (1001)**
- CSRF token missing or invalid

**SESSION_EXPIRED (1002)**
- User session has expired

**INVALID_INPUT (1003)**
- User input validation failed

**RATE_LIMIT_EXCEEDED (1004)**
- Too many requests from this IP

**DATABASE_CONNECTION_FAILED (1005)**
- Cannot connect to database

**FILE_UPLOAD_ERROR (1006)**
- Error uploading file

**PERMISSION_DENIED (1007)**
- User lacks required permissions

**RESOURCE_NOT_FOUND (1008)**
- Requested resource not found

**SERVICE_UNAVAILABLE (1009)**
- Backend service unavailable

## Notes About Error Codes

### Best Practices
- Always check return codes in your code
- Provide meaningful error messages to users
- Log detailed error information for debugging
- Handle errors gracefully with appropriate fallbacks
- Use consistent error code patterns across your application
- Document your custom error codes thoroughly

### Error Code Patterns
- **1xx**: Informational - request received, continuing process
- **2xx**: Success - action successfully received, understood, accepted
- **3xx**: Redirection - further action needed to complete request
- **4xx**: Client Error - request contains bad syntax or cannot be fulfilled
- **5xx**: Server Error - server failed to fulfill valid request

### Common Error Code Ranges
- **0-99**: System general errors
- **100-199**: Sockets and network errors
- **200-299**: File system errors
- **300-399**: Memory and resource errors
- **400+**: Application specific errors
- **1000+**: Custom application errors

### Debugging Tips
- Check system logs for detailed error information
- Use error code lookup tools for unknown codes
- Verify permissions and access rights
- Check network connectivity for network-related errors
- Review application-specific documentation
- Use debugging tools and profilers for complex issues

### Error Handling Strategies
- Implement comprehensive error logging
- Create user-friendly error messages
- Use try-catch blocks appropriately
- Implement retry mechanisms for transient errors
- Set up monitoring and alerting for critical errors
- Create fallback mechanisms for critical operations