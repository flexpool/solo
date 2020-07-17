package jsonrpc

import "encoding/json"

// Version is a JSONRPC version
const Version = "2.0"

// Request specifies the JSONRPC gateway request
type Request struct {
	JSONRPCVersion string   `json:"jsonrpc"`
	ID             int      `json:"id"`
	Method         string   `json:"method"`
	Params         []string `json:"params"`
}

// Response specifies the JSONRPC gateway response
type Response struct {
	JSONRPCVersion string      `json:"jsonrpc"`
	ID             int         `json:"id"`
	Result         interface{} `json:"result"`
	Error          interface{} `json:"error"`
}

// UnmarshalRequest parses the JSONRPC request, and returns it as a Request struct
func UnmarshalRequest(b []byte) (Request, error) {
	var req Request
	err := json.Unmarshal(b, &req)
	return req, err
}

// MarshalResponse creates a JSONRPC response bytes from a Response struct
func MarshalResponse(r Response) []byte {
	resp, _ := json.Marshal(r)
	return resp
}
